// Generated from src/Sourcerust.g4 by ANTLR 4.13.1

import { AbstractParseTreeVisitor } from "antlr4ng";


import { ProgContext } from "./SourcerustParser.js";
import { TypeContext } from "./SourcerustParser.js";
import { BlockContext } from "./SourcerustParser.js";
import { StmtContext } from "./SourcerustParser.js";
import { FunctionContext } from "./SourcerustParser.js";
import { ParamListContext } from "./SourcerustParser.js";
import { ParamContext } from "./SourcerustParser.js";
import { RefModifierContext } from "./SourcerustParser.js";
import { MutModifierContext } from "./SourcerustParser.js";
import { EmptyStmtContext } from "./SourcerustParser.js";
import { LetStmtContext } from "./SourcerustParser.js";
import { CondStmtContext } from "./SourcerustParser.js";
import { DerefExprContext } from "./SourcerustParser.js";
import { AssignStmtContext } from "./SourcerustParser.js";
import { ReturnStmtContext } from "./SourcerustParser.js";
import { WhileStmtContext } from "./SourcerustParser.js";
import { ExprStmtContext } from "./SourcerustParser.js";
import { AddContext } from "./SourcerustParser.js";
import { SubContext } from "./SourcerustParser.js";
import { LeqExprContext } from "./SourcerustParser.js";
import { ModContext } from "./SourcerustParser.js";
import { CharLiteralContext } from "./SourcerustParser.js";
import { MulContext } from "./SourcerustParser.js";
import { GeqExprContext } from "./SourcerustParser.js";
import { ParensContext } from "./SourcerustParser.js";
import { LtExprContext } from "./SourcerustParser.js";
import { GtExprContext } from "./SourcerustParser.js";
import { VecMacroContext } from "./SourcerustParser.js";
import { DivContext } from "./SourcerustParser.js";
import { FuncCallContext } from "./SourcerustParser.js";
import { TrueKeywordContext } from "./SourcerustParser.js";
import { RefContext } from "./SourcerustParser.js";
import { ArrayAccessContext } from "./SourcerustParser.js";
import { IdentifierContext } from "./SourcerustParser.js";
import { StringLiteralContext } from "./SourcerustParser.js";
import { EqExprContext } from "./SourcerustParser.js";
import { NeqExprContext } from "./SourcerustParser.js";
import { IntLiteralContext } from "./SourcerustParser.js";
import { FalseKewordContext } from "./SourcerustParser.js";
import { LiteralContext } from "./SourcerustParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `SourcerustParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class SourcerustVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `SourcerustParser.prog`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProg?: (ctx: ProgContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.type`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitType?: (ctx: TypeContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.block`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBlock?: (ctx: BlockContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.paramList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParamList?: (ctx: ParamListContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.param`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParam?: (ctx: ParamContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.refModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRefModifier?: (ctx: RefModifierContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.mutModifier`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMutModifier?: (ctx: MutModifierContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.emptyStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEmptyStmt?: (ctx: EmptyStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.letStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLetStmt?: (ctx: LetStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.condStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCondStmt?: (ctx: CondStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.derefExpr`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDerefExpr?: (ctx: DerefExprContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.assignStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAssignStmt?: (ctx: AssignStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.returnStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitReturnStmt?: (ctx: ReturnStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.whileStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWhileStmt?: (ctx: WhileStmtContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.exprStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitExprStmt?: (ctx: ExprStmtContext) => Result;
    /**
     * Visit a parse tree produced by the `Add`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAdd?: (ctx: AddContext) => Result;
    /**
     * Visit a parse tree produced by the `Sub`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSub?: (ctx: SubContext) => Result;
    /**
     * Visit a parse tree produced by the `LeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLeqExpr?: (ctx: LeqExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Mod`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMod?: (ctx: ModContext) => Result;
    /**
     * Visit a parse tree produced by the `CharLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCharLiteral?: (ctx: CharLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `Mul`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMul?: (ctx: MulContext) => Result;
    /**
     * Visit a parse tree produced by the `GeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGeqExpr?: (ctx: GeqExprContext) => Result;
    /**
     * Visit a parse tree produced by the `Parens`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParens?: (ctx: ParensContext) => Result;
    /**
     * Visit a parse tree produced by the `LtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLtExpr?: (ctx: LtExprContext) => Result;
    /**
     * Visit a parse tree produced by the `GtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGtExpr?: (ctx: GtExprContext) => Result;
    /**
     * Visit a parse tree produced by the `VecMacro`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVecMacro?: (ctx: VecMacroContext) => Result;
    /**
     * Visit a parse tree produced by the `Div`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitDiv?: (ctx: DivContext) => Result;
    /**
     * Visit a parse tree produced by the `FuncCall`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFuncCall?: (ctx: FuncCallContext) => Result;
    /**
     * Visit a parse tree produced by the `TrueKeyword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitTrueKeyword?: (ctx: TrueKeywordContext) => Result;
    /**
     * Visit a parse tree produced by the `Ref`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitRef?: (ctx: RefContext) => Result;
    /**
     * Visit a parse tree produced by the `ArrayAccess`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitArrayAccess?: (ctx: ArrayAccessContext) => Result;
    /**
     * Visit a parse tree produced by the `Identifier`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIdentifier?: (ctx: IdentifierContext) => Result;
    /**
     * Visit a parse tree produced by the `StringLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStringLiteral?: (ctx: StringLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `EqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitEqExpr?: (ctx: EqExprContext) => Result;
    /**
     * Visit a parse tree produced by the `NeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitNeqExpr?: (ctx: NeqExprContext) => Result;
    /**
     * Visit a parse tree produced by the `IntLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIntLiteral?: (ctx: IntLiteralContext) => Result;
    /**
     * Visit a parse tree produced by the `FalseKeword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFalseKeword?: (ctx: FalseKewordContext) => Result;
    /**
     * Visit a parse tree produced by `SourcerustParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

