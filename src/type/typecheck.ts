import { AbstractParseTreeVisitor } from "antlr4ng";
import { SourcerustVisitor } from "../parser/SourcerustVisitor";
import {
    ProgContext,
    LetStmtContext,
    ExpressionContext,
    FunctionContext,
    ParamContext,
    AssignStmtContext,
    ReturnStmtContext,
    CondStmtContext,
    WhileStmtContext,
    BlockContext,
    AddContext,
    SubContext,
    StringLiteralContext,
    MulContext,
    DivContext,
    ModContext,
    EqExprContext,
    NeqExprContext,
    LtExprContext,
    LeqExprContext,
    GtExprContext,
    GeqExprContext,
    TrueKeywordContext,
    FalseKewordContext,
    CharLiteralContext,
    IdentifierContext,
    FuncCallContext,
    IntLiteralContext,
    ExprStmtContext
} from '../parser/SourcerustParser';

// A helper type to represent variable types and mutability
interface VarInfo {
    type: string;
    mutable: boolean;
    sharedBorrowCount: number;
    mutablyBorrowed: boolean;
}

export class TypeCheckerVisitor extends AbstractParseTreeVisitor<any> implements SourcerustVisitor<any> {
    private env: Map<string, VarInfo>[] = [new Map()];
    private returnType: string | null = null;
    private globalContext: Map<string, string> = new Map();

    private enterScope() {
        this.env.push(new Map());
    }

    private exitScope() {
        this.env.pop();
    }

    private currentScope(): Map<string, VarInfo> {
        return this.env[this.env.length - 1];
    }

    private lookup(name: string): VarInfo | undefined {
        for (let i = this.env.length - 1; i >= 0; i--) {
            const found = this.env[i].get(name);
            if (found) return found;
        }
        return undefined;
    }

    visitProg(ctx: ProgContext) {
        for (const stmt of ctx.stmt()) {
            this.visit(stmt);
        }
    }

    visitLetStmt(ctx: LetStmtContext) {
        const name = ctx.IDENT().getText();
        const type = ctx.type().getText();
        const mutable = ctx.MUT() !== undefined;
        const scope = this.currentScope();

        if (scope.has(name)) throw new Error(`Variable ${name} already declared.`);

        scope.set(name, { type, mutable, sharedBorrowCount: 0, mutablyBorrowed: false });
        if (ctx.expression()) {
            console.log(ctx.expression().getText())
            const exprText = ctx.expression().getText();
            const exprType = this.visit(ctx.expression());
            console.log("Expr type is : " + exprType)
            console.log("type is: " + type)
            if (exprText.startsWith("&mut ")) {
                // If the expression is a mutable borrow
                if (!mutable) {
                    throw new Error(`Cannot borrow ${name} mutably because it is immutable`);
                }
                // If it's a mutable borrow, we mark the variable as being mutably borrowed
                scope.get(name).mutablyBorrowed = true;
            } else if (exprText.startsWith("&")) {
                // If the expression is a shared borrow
                if (mutable) {
                    throw new Error(`Cannot borrow ${name} immutably because it is mutable`);
                }
                // Increment shared borrow count if it's a shared borrow
                scope.get(name).sharedBorrowCount += 1;
            }
            if (exprType !== type) throw new Error(`Type mismatch in initialization of ${name}`);

        }
        return "void";
    }

    private releaseBorrows() {
        for (const scope of this.env) {
            for (const info of scope.values()) {
                info.sharedBorrowCount = 0;
                info.mutablyBorrowed = false;
            }
        }
    }

    visitAssignStmt(ctx: AssignStmtContext) {
        console.log("Entering assignment statement")
        const lhs = ctx.expression(0);
        const rhs = ctx.expression(1);

        // Check the left-hand side (LHS) variable name
        let target: string;
        let info: VarInfo;

        if (lhs.getText().startsWith('*')) {
            target = lhs.getText().slice(1); // Dereferencing
            info = this.lookup(target);
            if (!info) throw new Error(`Undeclared variable: ${target}`);
            if (!info.mutable) throw new Error(`Cannot assign to immutable reference: ${target}`);
        } else {
            target = lhs.getText(); // Normal variable
            info = this.lookup(target);
            if (!info) throw new Error(`Undeclared variable: ${target}`);
            if (!info.mutable) throw new Error(`Cannot assign to immutable variable: ${target}`);
        }

        // **Before proceeding with the assignment**, check borrow rules
        if (info.sharedBorrowCount > 0)
            throw new Error(`Cannot mutate ${target} while it has active shared borrows`);

        if (info.mutablyBorrowed)
            throw new Error(`Cannot mutate ${target} while it is mutably borrowed`);

        // Proceed with checking types after borrow checks
        const lhsType = this.visit(lhs);
        const rhsType = this.visit(rhs);
        if (lhsType !== rhsType) throw new Error(`Type mismatch in assignment: ${lhsType} != ${rhsType}`);
        this.releaseBorrows();
        return "void";
    }


    visitFunction(ctx: FunctionContext) {
        const name = ctx.IDENT().getText();
        const params = ctx.paramList()?.param() ?? [];
        const returnType = ctx.type()?.getText() ?? 'void';
        this.returnType = returnType;

        // Add function name and return type to global context
        this.globalContext.set(name, returnType);

        this.enterScope();

        // Collect parameter names to detect conflicts later
        const paramNames = new Set<string>();
        for (const param of params) {
            const paramName = param.IDENT().getText();
            if (paramNames.has(paramName)) {
                throw new Error(`Duplicate parameter name: ${paramName}`);
            }
            paramNames.add(paramName);
            this.visit(param);
        }

        // Intercept variable declarations inside the block to detect conflicts
        const block = ctx.block();
        for (const stmt of block.stmt()) {
            if (stmt instanceof LetStmtContext) {
                const localName = stmt.IDENT().getText();
                if (paramNames.has(localName)) {
                    throw new Error(`Parameter name ${localName} conflicts with local variable`);
                }
            }
        }

        this.visit(block);
        this.exitScope();
        this.returnType = null;
        return "void";
    }

    // visitExprStmt(ctx: ExprStmtContext) {
    //     console.log("Visit Expr Stmt called");
        // if (ctx instanceof AddContext) {
        //     return this.visitAdd(ctx);
        // } else if (ctx instanceof SubContext) {
        //     return this.visitSub(ctx);
        // } else if (ctx instanceof MulContext) {
        //     return this.visitMul(ctx);
        // } else if (ctx instanceof DivContext) {
        //     return this.visitDiv(ctx);
        // } else if (ctx instanceof ModContext) {
        //     return this.visitMod(ctx);
        // } else if (ctx instanceof LtExprContext) {
        //     return this.visitLtExpr(ctx);
        // } else if (ctx instanceof LeqExprContext) {
        //     return this.visitLeqExpr(ctx);
        // } else if (ctx instanceof GeqExprContext) {
        //     return this.visitGeqExpr(ctx);
        // } else if (ctx instanceof GtExprContext) {
        //     return this.visitGtExpr(ctx);
        // } else if (ctx instanceof EqExprContext) {
        //     return this.visitEqExpr(ctx);
        // } else if (ctx instanceof NeqExprContext) {
        //     return this.visitNeqExpr(ctx);
        // } else if (ctx instanceof FuncCallContext) {
        //     return this.visitFuncCall(ctx);
        // } else if (ctx instanceof IntLiteralContext) {
        //     return this.visitIntLiteral(ctx);
        // } else if (ctx instanceof StringLiteralContext) {
        //     return this.visitStringLiteral(ctx);
        // } else if (ctx instanceof TrueKeywordContext) {
        //     return this.visitTrueKeyword(ctx);
        // } else if (ctx instanceof FalseKewordContext) {
        //     return this.visitFalseKeword(ctx);
        // } else if (ctx instanceof CharLiteralContext) {
        //     return this.visitCharLiteral(ctx);
        // } else if (ctx instanceof IdentifierContext) {
        //     return this.visitIdentifier(ctx);
        // } else {
        //     console.log(ctx.getText())
        //     console.log(ctx.toString())
        //     throw new Error("Unknown expression type: " + ctx.constructor.name);
        // }
    // }

    visitParam(ctx: ParamContext) {
        const name = ctx.IDENT().getText();
        const type = ctx.type().getText();
        const mutable = ctx.mutModifier() !== undefined;
        this.currentScope().set(name, { type, mutable, sharedBorrowCount: 0, mutablyBorrowed: false });
    }

    visitReturnStmt(ctx: ReturnStmtContext) {
        const type = ctx.expression() ? this.visit(ctx.expression()) : 'void';
        if (this.returnType !== type)
            throw new Error(`Return type mismatch: expected ${this.returnType}, got ${type}`);
    }

    visitWhileStmt(ctx: WhileStmtContext) {
        const condType = this.visit(ctx.expression());
        if (condType !== 'bool') throw new Error(`While condition must be boolean`);
        this.enterScope();
        this.visit(ctx.block());
        this.exitScope();
    }

    visitCondStmt(ctx: CondStmtContext) {
        const condType = this.visit(ctx.expression(0));
        if (condType !== 'bool') throw new Error(`Condition must be boolean`);
        if (ctx.expression(1)) {
            const thenType = this.visit(ctx.expression(1));
            const elseType = this.visit(ctx.expression(2));
            if (thenType !== elseType) throw new Error(`Branches must return the same type`);
        }
    }

    visitBlock(ctx: BlockContext) {
        this.enterScope();
        for (const stmt of ctx.stmt()) {
            this.visit(stmt);
            this.releaseBorrows();
        }
        this.exitScope();
    }

    visitAdd(ctx: AddContext) {
        console.log("Add visited (TC)")
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== 'u16' || right !== 'u16') throw new Error(`Expected u16 operands`);
        return 'u16';
    }

    visitSub(ctx: SubContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== 'u16' || right !== 'u16') throw new Error(`Expected u16 operands`);
        return 'u16';
    }

    visitMul(ctx: MulContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== 'u16' || right !== 'u16') throw new Error(`Expected u16 operands`);
        return 'u16';
    }

    visitDiv(ctx: DivContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== 'u16' || right !== 'u16') throw new Error(`Expected u16 operands`);
        return 'u16';
    }

    visitMod(ctx: ModContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== 'u16' || right !== 'u16') throw new Error(`Expected u16 operands`);
        return 'u16';
    }

    visitEqExpr(ctx: EqExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitNeqExpr(ctx: NeqExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitLtExpr(ctx: LtExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitLeqExpr(ctx: LeqExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitGtExpr(ctx: GtExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitGeqExpr(ctx: GeqExprContext) {
        const left = this.visit(ctx.expression(0));
        const right = this.visit(ctx.expression(1));
        if (left !== right) throw new Error(`Type mismatch in comparison`);
        return 'bool';
    }

    visitStringLiteral(ctx: StringLiteralContext) {
        return 'str';
    }

    visitTrueKeyword(ctx: TrueKeywordContext) {
        return 'bool';
    }

    visitFalseKeword(ctx: FalseKewordContext) {
        return 'bool';
    }

    visitCharLiteral(ctx: CharLiteralContext) {
        return 'char';
    }

    visitIntLiteral(ctx: IntLiteralContext) {
        return "u16";
    }

    visitIdentifier(ctx: IdentifierContext) {
        const name = ctx.getText();
        const info = this.lookup(name);
        if (!info) throw new Error(`Undeclared identifier ${name}`);
        return info.type;
    }

    visitFuncCall(ctx: FuncCallContext) {
        // Try to get function return type from global context
        const name = ctx.IDENT().getText();
        return this.globalContext.get(name) ?? "void";
    }

    defaultResult() { return "void"; }
}
