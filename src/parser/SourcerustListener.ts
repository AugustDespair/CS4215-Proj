// Generated from src/Sourcerust.g4 by ANTLR 4.13.1

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `SourcerustParser`.
 */
export class SourcerustListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `SourcerustParser.prog`.
     * @param ctx the parse tree
     */
    enterProg?: (ctx: ProgContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.prog`.
     * @param ctx the parse tree
     */
    exitProg?: (ctx: ProgContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.type`.
     * @param ctx the parse tree
     */
    enterType?: (ctx: TypeContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.type`.
     * @param ctx the parse tree
     */
    exitType?: (ctx: TypeContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.block`.
     * @param ctx the parse tree
     */
    enterBlock?: (ctx: BlockContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.block`.
     * @param ctx the parse tree
     */
    exitBlock?: (ctx: BlockContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.paramList`.
     * @param ctx the parse tree
     */
    enterParamList?: (ctx: ParamListContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.paramList`.
     * @param ctx the parse tree
     */
    exitParamList?: (ctx: ParamListContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.param`.
     * @param ctx the parse tree
     */
    enterParam?: (ctx: ParamContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.param`.
     * @param ctx the parse tree
     */
    exitParam?: (ctx: ParamContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.refModifier`.
     * @param ctx the parse tree
     */
    enterRefModifier?: (ctx: RefModifierContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.refModifier`.
     * @param ctx the parse tree
     */
    exitRefModifier?: (ctx: RefModifierContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.mutModifier`.
     * @param ctx the parse tree
     */
    enterMutModifier?: (ctx: MutModifierContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.mutModifier`.
     * @param ctx the parse tree
     */
    exitMutModifier?: (ctx: MutModifierContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.emptyStmt`.
     * @param ctx the parse tree
     */
    enterEmptyStmt?: (ctx: EmptyStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.emptyStmt`.
     * @param ctx the parse tree
     */
    exitEmptyStmt?: (ctx: EmptyStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.letStmt`.
     * @param ctx the parse tree
     */
    enterLetStmt?: (ctx: LetStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.letStmt`.
     * @param ctx the parse tree
     */
    exitLetStmt?: (ctx: LetStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.condStmt`.
     * @param ctx the parse tree
     */
    enterCondStmt?: (ctx: CondStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.condStmt`.
     * @param ctx the parse tree
     */
    exitCondStmt?: (ctx: CondStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.derefExpr`.
     * @param ctx the parse tree
     */
    enterDerefExpr?: (ctx: DerefExprContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.derefExpr`.
     * @param ctx the parse tree
     */
    exitDerefExpr?: (ctx: DerefExprContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.assignStmt`.
     * @param ctx the parse tree
     */
    enterAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.assignStmt`.
     * @param ctx the parse tree
     */
    exitAssignStmt?: (ctx: AssignStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.returnStmt`.
     * @param ctx the parse tree
     */
    enterReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.returnStmt`.
     * @param ctx the parse tree
     */
    exitReturnStmt?: (ctx: ReturnStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.whileStmt`.
     * @param ctx the parse tree
     */
    enterWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.whileStmt`.
     * @param ctx the parse tree
     */
    exitWhileStmt?: (ctx: WhileStmtContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.exprStmt`.
     * @param ctx the parse tree
     */
    enterExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.exprStmt`.
     * @param ctx the parse tree
     */
    exitExprStmt?: (ctx: ExprStmtContext) => void;
    /**
     * Enter a parse tree produced by the `Add`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterAdd?: (ctx: AddContext) => void;
    /**
     * Exit a parse tree produced by the `Add`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitAdd?: (ctx: AddContext) => void;
    /**
     * Enter a parse tree produced by the `Sub`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterSub?: (ctx: SubContext) => void;
    /**
     * Exit a parse tree produced by the `Sub`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitSub?: (ctx: SubContext) => void;
    /**
     * Enter a parse tree produced by the `LeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterLeqExpr?: (ctx: LeqExprContext) => void;
    /**
     * Exit a parse tree produced by the `LeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitLeqExpr?: (ctx: LeqExprContext) => void;
    /**
     * Enter a parse tree produced by the `Mod`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterMod?: (ctx: ModContext) => void;
    /**
     * Exit a parse tree produced by the `Mod`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitMod?: (ctx: ModContext) => void;
    /**
     * Enter a parse tree produced by the `CharLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterCharLiteral?: (ctx: CharLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `CharLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitCharLiteral?: (ctx: CharLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `Mul`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterMul?: (ctx: MulContext) => void;
    /**
     * Exit a parse tree produced by the `Mul`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitMul?: (ctx: MulContext) => void;
    /**
     * Enter a parse tree produced by the `GeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterGeqExpr?: (ctx: GeqExprContext) => void;
    /**
     * Exit a parse tree produced by the `GeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitGeqExpr?: (ctx: GeqExprContext) => void;
    /**
     * Enter a parse tree produced by the `Parens`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterParens?: (ctx: ParensContext) => void;
    /**
     * Exit a parse tree produced by the `Parens`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitParens?: (ctx: ParensContext) => void;
    /**
     * Enter a parse tree produced by the `LtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterLtExpr?: (ctx: LtExprContext) => void;
    /**
     * Exit a parse tree produced by the `LtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitLtExpr?: (ctx: LtExprContext) => void;
    /**
     * Enter a parse tree produced by the `GtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterGtExpr?: (ctx: GtExprContext) => void;
    /**
     * Exit a parse tree produced by the `GtExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitGtExpr?: (ctx: GtExprContext) => void;
    /**
     * Enter a parse tree produced by the `VecMacro`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterVecMacro?: (ctx: VecMacroContext) => void;
    /**
     * Exit a parse tree produced by the `VecMacro`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitVecMacro?: (ctx: VecMacroContext) => void;
    /**
     * Enter a parse tree produced by the `Div`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterDiv?: (ctx: DivContext) => void;
    /**
     * Exit a parse tree produced by the `Div`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitDiv?: (ctx: DivContext) => void;
    /**
     * Enter a parse tree produced by the `FuncCall`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterFuncCall?: (ctx: FuncCallContext) => void;
    /**
     * Exit a parse tree produced by the `FuncCall`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitFuncCall?: (ctx: FuncCallContext) => void;
    /**
     * Enter a parse tree produced by the `TrueKeyword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterTrueKeyword?: (ctx: TrueKeywordContext) => void;
    /**
     * Exit a parse tree produced by the `TrueKeyword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitTrueKeyword?: (ctx: TrueKeywordContext) => void;
    /**
     * Enter a parse tree produced by the `Ref`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterRef?: (ctx: RefContext) => void;
    /**
     * Exit a parse tree produced by the `Ref`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitRef?: (ctx: RefContext) => void;
    /**
     * Enter a parse tree produced by the `ArrayAccess`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterArrayAccess?: (ctx: ArrayAccessContext) => void;
    /**
     * Exit a parse tree produced by the `ArrayAccess`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitArrayAccess?: (ctx: ArrayAccessContext) => void;
    /**
     * Enter a parse tree produced by the `Identifier`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Exit a parse tree produced by the `Identifier`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitIdentifier?: (ctx: IdentifierContext) => void;
    /**
     * Enter a parse tree produced by the `StringLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `StringLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitStringLiteral?: (ctx: StringLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `EqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterEqExpr?: (ctx: EqExprContext) => void;
    /**
     * Exit a parse tree produced by the `EqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitEqExpr?: (ctx: EqExprContext) => void;
    /**
     * Enter a parse tree produced by the `NeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterNeqExpr?: (ctx: NeqExprContext) => void;
    /**
     * Exit a parse tree produced by the `NeqExpr`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitNeqExpr?: (ctx: NeqExprContext) => void;
    /**
     * Enter a parse tree produced by the `IntLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterIntLiteral?: (ctx: IntLiteralContext) => void;
    /**
     * Exit a parse tree produced by the `IntLiteral`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitIntLiteral?: (ctx: IntLiteralContext) => void;
    /**
     * Enter a parse tree produced by the `FalseKeword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    enterFalseKeword?: (ctx: FalseKewordContext) => void;
    /**
     * Exit a parse tree produced by the `FalseKeword`
     * labeled alternative in `SourcerustParser.expression`.
     * @param ctx the parse tree
     */
    exitFalseKeword?: (ctx: FalseKewordContext) => void;
    /**
     * Enter a parse tree produced by `SourcerustParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `SourcerustParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

