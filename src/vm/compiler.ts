// // ********
// // compiler
// // ********

import { AbstractParseTreeVisitor, ParserRuleContext } from "antlr4ng";
import { SourcerustVisitor } from "../parser/SourcerustVisitor";
import { AddContext, AssignStmtContext, BlockContext, CharLiteralContext, DerefExprContext, DivContext, EmptyStmtContext, EqExprContext, ExprStmtContext, FalseKewordContext, FuncCallContext, FunctionContext, GeqExprContext, GtExprContext, IdentifierContext, IntLiteralContext, LeqExprContext, LetStmtContext, LtExprContext, ModContext, MulContext, NeqExprContext, ProgContext, RefContext, ReturnStmtContext, StringLiteralContext, SubContext, TrueKeywordContext, WhileStmtContext } from "../parser/SourcerustParser";


export class CompilerVisitor extends AbstractParseTreeVisitor<any> implements SourcerustVisitor<any> {

    private instrs: any[];
    private wc: number;
    private env: any[][];


    public constructor() {
        super();
        this.instrs = [];
        this.wc = 0;
        this.env = [[]];
    }

    private compile_time_environment_position(env: any[][], x: string): [number, number] {
        console.log(this.env)
        console.log("Compile Time Environment Position")
        let frame_index = env.length;
        while (this.value_index(env[--frame_index], x) === -1) { }
        return [frame_index, this.value_index(env[frame_index], x)];
    }

    private value_index(frame: string[], x: string): number {
        console.log("value index frame: " + JSON.stringify(frame))
        for (let i = 0; i < frame.length; i++) {
            if (frame[i] === x) return i;
        }
        return -1;
    }

    get_instrs() {
        return this.instrs;
    }

    // visitProg(ctx: ProgContext) {
    //     const enterScope = { tag: "ENTER_SCOPE", num: 0 };
    //     this.instrs.push(enterScope);
    //     for (let statement of ctx.stmt()) {
    //         this.visit(statement);
    //     }
    //     enterScope.num = this.env[0].length;
    //     this.instrs.pop();
    //     this.instrs.push({ tag: "DONE" });
    // }
    visitProg(ctx: ProgContext) {
        const enterScope = { tag: "ENTER_SCOPE", num: 0 };
        this.instrs.push(enterScope);

        const stmts = ctx.stmt();
        for (let i = 0; i < stmts.length; i++) {
            const stmt = stmts[i];
            this.visit(stmt);

            // If it's not the last stmt and is an ExprStmt, discard it
            if (i < ctx.stmt().length - 1) {
                this.instrs.push({ tag: "POP" });
            }
        }

        enterScope.num = this.env[0].length;
        // this.instrs.pop();
        this.instrs.push({ tag: "DONE" });
    }


    visitBlock(ctx: BlockContext) {
        const decls = ctx.stmt().filter(s => s instanceof LetStmtContext);
        const names = decls.map(d => d.IDENT().getText());
        const enterScope = { tag: "ENTER_SCOPE", num: names.length };
        this.instrs.push(enterScope);

        this.env.push([]);
        this.env.push(names);
        for (let i = 0; i < ctx.stmt().length; i++) {
            const stmt = ctx.stmt()[i];

            this.visit(stmt);

            // If it's not the last stmt and is an ExprStmt, discard it
            if (i < ctx.stmt().length - 1 && stmt instanceof ExprStmtContext) {
                this.instrs.push({ tag: "POP" });
            }
        }

        this.env.pop();
        this.instrs.push({ tag: "EXIT_SCOPE" });

    }

    visitAssignStmt(ctx: AssignStmtContext) {
        const rhs = ctx.expression(1);
        const lhs = ctx.expression(0);

        // Visit RHS first
        this.visit(rhs);

        // LHS can be:
        // - variable (IDENT)
        // - deref expr like *x

        if (lhs instanceof IdentifierContext) {
            const sym = lhs.getText();
            this.instrs.push({ tag: "ASSIGN", pos: this.compile_time_environment_position(this.env, sym) });
        } else if (lhs instanceof DerefExprContext) {
            // *x = RHS
            this.visit(lhs); // visit *x to leave address on stack
            this.instrs.push({ tag: "DEREF" });
        } else {
            throw new Error("Unsupported LHS in assignment");
        }
    }

    visitDerefExpr(ctx: DerefExprContext) {
        // Visit the child (could be another derefExpr or IDENT)
        const child = ctx.derefExpr?.() ?? ctx.IDENT();

        if (child instanceof ParserRuleContext) {
            // Nested derefExpr: *(*x)
            this.visit(child);
        } else {
            // IDENT: *x
            const name = child.getText();
            this.instrs.push({ tag: "LD", sym: name, pos: this.compile_time_environment_position(this.env, name) });
        }

        // Dereference the result of what's on the top of the stack
        this.instrs.push({ tag: "DEREF" });
    }

    visitLetStmt(ctx: LetStmtContext) {
        const sym = ctx.IDENT().getText();

        this.env[this.env.length - 1].push(sym);

        if (ctx.expression()) {
            this.visit(ctx.expression());
            const pos = this.compile_time_environment_position(this.env, sym);
            this.instrs.push({ tag: "ASSIGN", pos });
        } else {
            this.instrs.push({ tag: "LDC", val: "VOID" });
        }
    }

    visitIdentifier(ctx: IdentifierContext) {
        const identifierName = ctx.getText();
        const [frameIndex, valueIndex] = this.compile_time_environment_position(this.env, identifierName);

        this.instrs.push({
            tag: "LD",
            sym: identifierName,
            pos: [frameIndex, valueIndex]
        });
    }

    visitReturnStmt(ctx: ReturnStmtContext) {
        if (ctx.expression()) {
            this.visit(ctx.expression());
        } else {
            this.instrs.push({ tag: "LDC", val: "VOID" });
        }
        this.instrs.push({ tag: "RESET" });
    }

    visitWhileStmt(ctx: WhileStmtContext) {
        const cond = ctx.expression();
        const body = ctx.block();

        const start = this.instrs.length;

        this.visit(cond);
        const jofIndex = this.instrs.length;
        this.instrs.push({ tag: "JOF" });

        this.visit(body);
        this.instrs.push({ tag: "GOTO", addr: start });

        const end = this.instrs.length;
        this.instrs[jofIndex].addr = end;
    }

    // visitExprStmt(ctx: ExprStmtContext) {
    //     // Dispatch the correct visitor based on the specific rule
    //     if (ctx instanceof AddContext) {
    //         return this.visitAdd(ctx);
    //     } else if (ctx instanceof SubContext) {
    //         return this.visitSub(ctx);
    //     } else if (ctx instanceof MulContext) {
    //         return this.visitMul(ctx);
    //     } else if (ctx instanceof DivContext) {
    //         return this.visitDiv(ctx);
    //     } else if (ctx instanceof ModContext) {
    //         return this.visitMod(ctx);
    //     } else if (ctx instanceof LtExprContext) {
    //         return this.visitLtExpr(ctx);
    //     } else if (ctx instanceof LeqExprContext) {
    //         return this.visitLeqExpr(ctx);
    //     } else if (ctx instanceof GeqExprContext) {
    //         return this.visitGeqExpr(ctx);
    //     } else if (ctx instanceof GtExprContext) {
    //         return this.visitGtExpr(ctx);
    //     } else if (ctx instanceof EqExprContext) {
    //         return this.visitEqExpr(ctx);
    //     } else if (ctx instanceof NeqExprContext) {
    //         return this.visitNeqExpr(ctx);
    //     } else if (ctx instanceof RefContext) {
    //         return this.visitRef(ctx);
    //     } else if (ctx instanceof FuncCallContext) {
    //         return this.visitFuncCall(ctx);
    //     } else if (ctx instanceof IntLiteralContext) {
    //         return this.visitIntLiteral(ctx);
    //     } else if (ctx instanceof StringLiteralContext) {
    //         return this.visitStringLiteral(ctx);
    //     } else if (ctx instanceof TrueKeywordContext) {
    //         return this.visitTrueKeyword(ctx);
    //     } else if (ctx instanceof FalseKewordContext) {
    //         return this.visitFalseKeword(ctx);
    //     } else if (ctx instanceof CharLiteralContext) {
    //         return this.visitCharLiteral(ctx);
    //     } else if (ctx instanceof IdentifierContext) {
    //         return this.visitIdentifier(ctx);
    //     } else {
    //         throw new Error("Unknown expression type: " + ctx.constructor.name);
    //     }
    // }


    visitFunction(ctx: FunctionContext): void {
        const name = ctx.IDENT().getText();
        const params = ctx.paramList()?.param().map(p => p.IDENT().getText()) ?? [];

        this.env[this.env.length - 1].push(name);

        const ldfAddr = this.instrs.length + 2;
        this.instrs.push({ tag: "LDF", arity: params.length, addr: ldfAddr });

        const gotoIndex = this.instrs.length;
        this.instrs.push({ tag: "GOTO" });

        this.env.push([name, ...params]);

        for (let param of params) {
            const pos = this.compile_time_environment_position(this.env, param);
            this.instrs.push({ tag: "ASSIGN", pos });
        }

        this.visit(ctx.block());
        this.instrs.push({ tag: "RESET" });

        this.env.pop();

        this.instrs[gotoIndex].addr = this.instrs.length;

        const pos = this.compile_time_environment_position(this.env, name);
        this.instrs.push({ tag: "ASSIGN", pos });
    }


    visitAdd(ctx: AddContext) {
        console.log("Visiting add!");
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        console.log("Loading variables done")
        this.instrs.push({ tag: "BINOP", sym: "+" });
    }

    visitDiv(ctx: DivContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "/" });
    }

    visitMod(ctx: ModContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "%" });
    }

    visitLtExpr(ctx: LtExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "<" });
    }

    visitLeqExpr(ctx: LeqExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "<=" });
    }

    visitGeqExpr(ctx: GeqExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: ">=" });
    }

    visitGtExpr(ctx: GtExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: ">" });
    }

    visitEqExpr(ctx: EqExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "==" });
    }

    visitNeqExpr(ctx: NeqExprContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "!=" });
    }

    visitSub(ctx: SubContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "-" });
    }

    visitMul(ctx: MulContext) {
        this.visit(ctx.expression(0));
        this.visit(ctx.expression(1));
        this.instrs.push({ tag: "BINOP", sym: "*" });
    }

    visitRef(ctx: RefContext) {
        this.visit(ctx.IDENT());
        this.instrs.push({ tag: "REF" });
    }

    visitFuncCall(ctx: FuncCallContext) {
        const name = ctx.IDENT().getText();
        const args = ctx.expression();

        for (const arg of args) {
            this.visit(arg);
        }

        this.instrs.push({ tag: "CALL", arity: args.length });
    }

    visitIntLiteral(ctx: IntLiteralContext) {
        this.instrs.push({
            tag: "LDC",
            value: parseInt(ctx.getText())
        })
    }

    visitStringLiteral(ctx: StringLiteralContext) {
        this.instrs.push({
            tag: "LDC",
            value: ctx.getText()
        })
    }

    visitTrueKeyword(ctx: TrueKeywordContext) {
        this.instrs.push({
            tag: "LDC",
            value: ctx.getText() === "true"
        })
    }

    visitFalseKeword(ctx: FalseKewordContext) {
        this.instrs.push({
            tag: "LDC",
            value: ctx.getText() === "false"
        })
    }

    visitCharLiteral(ctx: CharLiteralContext) {
        this.instrs.push({
            tag: "LDC",
            value: ctx.getText()
        })
    }

}