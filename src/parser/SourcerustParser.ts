// Generated from src/Sourcerust.g4 by ANTLR 4.13.1

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { SourcerustListener } from "./SourcerustListener.js";
import { SourcerustVisitor } from "./SourcerustVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


export class SourcerustParser extends antlr.Parser {
    public static readonly T__0 = 1;
    public static readonly T__1 = 2;
    public static readonly T__2 = 3;
    public static readonly T__3 = 4;
    public static readonly T__4 = 5;
    public static readonly T__5 = 6;
    public static readonly T__6 = 7;
    public static readonly T__7 = 8;
    public static readonly T__8 = 9;
    public static readonly T__9 = 10;
    public static readonly T__10 = 11;
    public static readonly T__11 = 12;
    public static readonly T__12 = 13;
    public static readonly T__13 = 14;
    public static readonly T__14 = 15;
    public static readonly T__15 = 16;
    public static readonly T__16 = 17;
    public static readonly T__17 = 18;
    public static readonly T__18 = 19;
    public static readonly T__19 = 20;
    public static readonly T__20 = 21;
    public static readonly T__21 = 22;
    public static readonly T__22 = 23;
    public static readonly FN = 24;
    public static readonly LET = 25;
    public static readonly RETURN = 26;
    public static readonly WHILE = 27;
    public static readonly FOR = 28;
    public static readonly IN = 29;
    public static readonly MUT = 30;
    public static readonly VEC = 31;
    public static readonly U16 = 32;
    public static readonly STR = 33;
    public static readonly IF = 34;
    public static readonly ELSE = 35;
    public static readonly ARROW = 36;
    public static readonly IDENT = 37;
    public static readonly INT = 38;
    public static readonly STRING = 39;
    public static readonly CHAR_LITERAL = 40;
    public static readonly TRUE = 41;
    public static readonly FALSE = 42;
    public static readonly WS = 43;
    public static readonly COMMENT = 44;
    public static readonly RULE_prog = 0;
    public static readonly RULE_type = 1;
    public static readonly RULE_block = 2;
    public static readonly RULE_stmt = 3;
    public static readonly RULE_function = 4;
    public static readonly RULE_paramList = 5;
    public static readonly RULE_param = 6;
    public static readonly RULE_refModifier = 7;
    public static readonly RULE_mutModifier = 8;
    public static readonly RULE_emptyStmt = 9;
    public static readonly RULE_letStmt = 10;
    public static readonly RULE_condStmt = 11;
    public static readonly RULE_derefExpr = 12;
    public static readonly RULE_assignStmt = 13;
    public static readonly RULE_returnStmt = 14;
    public static readonly RULE_whileStmt = 15;
    public static readonly RULE_exprStmt = 16;
    public static readonly RULE_expression = 17;
    public static readonly RULE_literal = 18;

    public static readonly literalNames = [
        null, "'&'", "'['", "']'", "'{'", "'}'", "'('", "')'", "','", "':'", 
        "';'", "'='", "'*'", "'/'", "'+'", "'-'", "'%'", "'<'", "'<='", 
        "'>='", "'>'", "'=='", "'!='", "'!'", "'fn'", "'let'", "'return'", 
        "'while'", "'for'", "'in'", "'mut'", "'vec'", "'u16'", "'str'", 
        "'if'", "'else'", "'->'", null, null, null, null, "'true'", "'false'"
    ];

    public static readonly symbolicNames = [
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, null, null, null, null, null, null, null, null, null, 
        null, null, "FN", "LET", "RETURN", "WHILE", "FOR", "IN", "MUT", 
        "VEC", "U16", "STR", "IF", "ELSE", "ARROW", "IDENT", "INT", "STRING", 
        "CHAR_LITERAL", "TRUE", "FALSE", "WS", "COMMENT"
    ];
    public static readonly ruleNames = [
        "prog", "type", "block", "stmt", "function", "paramList", "param", 
        "refModifier", "mutModifier", "emptyStmt", "letStmt", "condStmt", 
        "derefExpr", "assignStmt", "returnStmt", "whileStmt", "exprStmt", 
        "expression", "literal",
    ];

    public get grammarFileName(): string { return "Sourcerust.g4"; }
    public get literalNames(): (string | null)[] { return SourcerustParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return SourcerustParser.symbolicNames; }
    public get ruleNames(): string[] { return SourcerustParser.ruleNames; }
    public get serializedATN(): number[] { return SourcerustParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, SourcerustParser._ATN, SourcerustParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public prog(): ProgContext {
        let localContext = new ProgContext(this.context, this.state);
        this.enterRule(localContext, 0, SourcerustParser.RULE_prog);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 41;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2399147074) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 505) !== 0)) {
                {
                {
                this.state = 38;
                this.stmt();
                }
                }
                this.state = 43;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 44;
            this.match(SourcerustParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public type_(): TypeContext;
    public type_(_p: number): TypeContext;
    public type_(_p?: number): TypeContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new TypeContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 2;
        this.enterRecursionRule(localContext, 2, SourcerustParser.RULE_type, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 54;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SourcerustParser.U16:
                {
                this.state = 47;
                this.match(SourcerustParser.U16);
                }
                break;
            case SourcerustParser.STR:
                {
                this.state = 48;
                this.match(SourcerustParser.STR);
                }
                break;
            case SourcerustParser.T__0:
                {
                this.state = 49;
                this.match(SourcerustParser.T__0);
                this.state = 51;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 50;
                    this.match(SourcerustParser.MUT);
                    }
                }

                this.state = 53;
                this.type_(2);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 61;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    {
                    localContext = new TypeContext(parentContext, parentState);
                    this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_type);
                    this.state = 56;
                    if (!(this.precpred(this.context, 1))) {
                        throw this.createFailedPredicateException("this.precpred(this.context, 1)");
                    }
                    this.state = 57;
                    this.match(SourcerustParser.T__1);
                    this.state = 58;
                    this.match(SourcerustParser.T__2);
                    }
                    }
                }
                this.state = 63;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 3, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public block(): BlockContext {
        let localContext = new BlockContext(this.context, this.state);
        this.enterRule(localContext, 4, SourcerustParser.RULE_block);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 64;
            this.match(SourcerustParser.T__3);
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2399147074) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & 505) !== 0)) {
                {
                {
                this.state = 65;
                this.stmt();
                }
                }
                this.state = 70;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 71;
            this.match(SourcerustParser.T__4);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public stmt(): StmtContext {
        let localContext = new StmtContext(this.context, this.state);
        this.enterRule(localContext, 6, SourcerustParser.RULE_stmt);
        try {
            this.state = 81;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 5, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 73;
                this.letStmt();
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 74;
                this.assignStmt();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 75;
                this.returnStmt();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 76;
                this.whileStmt();
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 77;
                this.exprStmt();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 78;
                this.function_();
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 79;
                this.emptyStmt();
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 80;
                this.condStmt();
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): FunctionContext {
        let localContext = new FunctionContext(this.context, this.state);
        this.enterRule(localContext, 8, SourcerustParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 83;
            this.match(SourcerustParser.FN);
            this.state = 84;
            this.match(SourcerustParser.IDENT);
            this.state = 85;
            this.match(SourcerustParser.T__5);
            this.state = 87;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 30 || _la === 37) {
                {
                this.state = 86;
                this.paramList();
                }
            }

            this.state = 89;
            this.match(SourcerustParser.T__6);
            this.state = 91;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 36) {
                {
                this.state = 90;
                this.match(SourcerustParser.ARROW);
                }
            }

            this.state = 94;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1 || _la === 32 || _la === 33) {
                {
                this.state = 93;
                this.type_(0);
                }
            }

            this.state = 96;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public paramList(): ParamListContext {
        let localContext = new ParamListContext(this.context, this.state);
        this.enterRule(localContext, 10, SourcerustParser.RULE_paramList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 98;
            this.param();
            this.state = 103;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while (_la === 8) {
                {
                {
                this.state = 99;
                this.match(SourcerustParser.T__7);
                this.state = 100;
                this.param();
                }
                }
                this.state = 105;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public param(): ParamContext {
        let localContext = new ParamContext(this.context, this.state);
        this.enterRule(localContext, 12, SourcerustParser.RULE_param);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 107;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 1) {
                {
                this.state = 106;
                this.refModifier();
                }
            }

            this.state = 110;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 109;
                this.mutModifier();
                }
            }

            this.state = 112;
            this.match(SourcerustParser.IDENT);
            this.state = 113;
            this.match(SourcerustParser.T__8);
            this.state = 114;
            this.type_(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public refModifier(): RefModifierContext {
        let localContext = new RefModifierContext(this.context, this.state);
        this.enterRule(localContext, 14, SourcerustParser.RULE_refModifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 116;
            this.match(SourcerustParser.T__0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public mutModifier(): MutModifierContext {
        let localContext = new MutModifierContext(this.context, this.state);
        this.enterRule(localContext, 16, SourcerustParser.RULE_mutModifier);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 118;
            this.match(SourcerustParser.MUT);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public emptyStmt(): EmptyStmtContext {
        let localContext = new EmptyStmtContext(this.context, this.state);
        this.enterRule(localContext, 18, SourcerustParser.RULE_emptyStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 120;
            this.match(SourcerustParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public letStmt(): LetStmtContext {
        let localContext = new LetStmtContext(this.context, this.state);
        this.enterRule(localContext, 20, SourcerustParser.RULE_letStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 122;
            this.match(SourcerustParser.LET);
            this.state = 124;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 30) {
                {
                this.state = 123;
                this.match(SourcerustParser.MUT);
                }
            }

            this.state = 126;
            this.match(SourcerustParser.IDENT);
            this.state = 127;
            this.match(SourcerustParser.T__8);
            this.state = 128;
            this.type_(0);
            this.state = 131;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 11) {
                {
                this.state = 129;
                this.match(SourcerustParser.T__10);
                this.state = 130;
                this.expression(0);
                }
            }

            this.state = 133;
            this.match(SourcerustParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public condStmt(): CondStmtContext {
        let localContext = new CondStmtContext(this.context, this.state);
        this.enterRule(localContext, 22, SourcerustParser.RULE_condStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            this.match(SourcerustParser.IF);
            this.state = 136;
            this.expression(0);
            this.state = 138;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 35) {
                {
                this.state = 137;
                this.match(SourcerustParser.ELSE);
                }
            }

            this.state = 140;
            this.expression(0);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public derefExpr(): DerefExprContext {
        let localContext = new DerefExprContext(this.context, this.state);
        this.enterRule(localContext, 24, SourcerustParser.RULE_derefExpr);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 142;
            this.match(SourcerustParser.T__11);
            this.state = 145;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SourcerustParser.T__11:
                {
                this.state = 143;
                this.derefExpr();
                }
                break;
            case SourcerustParser.IDENT:
                {
                this.state = 144;
                this.match(SourcerustParser.IDENT);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public assignStmt(): AssignStmtContext {
        let localContext = new AssignStmtContext(this.context, this.state);
        this.enterRule(localContext, 26, SourcerustParser.RULE_assignStmt);
        try {
            this.state = 156;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case SourcerustParser.T__0:
            case SourcerustParser.T__5:
            case SourcerustParser.VEC:
            case SourcerustParser.IDENT:
            case SourcerustParser.INT:
            case SourcerustParser.STRING:
            case SourcerustParser.CHAR_LITERAL:
            case SourcerustParser.TRUE:
            case SourcerustParser.FALSE:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 147;
                this.expression(0);
                this.state = 148;
                this.match(SourcerustParser.T__10);
                this.state = 149;
                this.expression(0);
                this.state = 150;
                this.match(SourcerustParser.T__9);
                }
                break;
            case SourcerustParser.T__11:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 152;
                this.derefExpr();
                this.state = 153;
                this.match(SourcerustParser.T__10);
                this.state = 154;
                this.expression(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public returnStmt(): ReturnStmtContext {
        let localContext = new ReturnStmtContext(this.context, this.state);
        this.enterRule(localContext, 28, SourcerustParser.RULE_returnStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 158;
            this.match(SourcerustParser.RETURN);
            this.state = 160;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483714) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 63) !== 0)) {
                {
                this.state = 159;
                this.expression(0);
                }
            }

            this.state = 162;
            this.match(SourcerustParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public whileStmt(): WhileStmtContext {
        let localContext = new WhileStmtContext(this.context, this.state);
        this.enterRule(localContext, 30, SourcerustParser.RULE_whileStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 164;
            this.match(SourcerustParser.WHILE);
            this.state = 165;
            this.expression(0);
            this.state = 166;
            this.block();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public exprStmt(): ExprStmtContext {
        let localContext = new ExprStmtContext(this.context, this.state);
        this.enterRule(localContext, 32, SourcerustParser.RULE_exprStmt);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 168;
            this.expression(0);
            this.state = 169;
            this.match(SourcerustParser.T__9);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public expression(): ExpressionContext;
    public expression(_p: number): ExpressionContext;
    public expression(_p?: number): ExpressionContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new ExpressionContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 34;
        this.enterRecursionRule(localContext, 34, SourcerustParser.RULE_expression, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 214;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 23, this.context) ) {
            case 1:
                {
                localContext = new VecMacroContext(localContext);
                this.context = localContext;
                previousContext = localContext;

                this.state = 172;
                this.match(SourcerustParser.VEC);
                this.state = 173;
                this.match(SourcerustParser.T__22);
                this.state = 174;
                this.match(SourcerustParser.T__1);
                this.state = 183;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483714) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 63) !== 0)) {
                    {
                    this.state = 175;
                    this.expression(0);
                    this.state = 180;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 8) {
                        {
                        {
                        this.state = 176;
                        this.match(SourcerustParser.T__7);
                        this.state = 177;
                        this.expression(0);
                        }
                        }
                        this.state = 182;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 185;
                this.match(SourcerustParser.T__2);
                }
                break;
            case 2:
                {
                localContext = new RefContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 186;
                this.match(SourcerustParser.T__0);
                this.state = 188;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if (_la === 30) {
                    {
                    this.state = 187;
                    this.match(SourcerustParser.MUT);
                    }
                }

                this.state = 190;
                this.match(SourcerustParser.IDENT);
                }
                break;
            case 3:
                {
                localContext = new FuncCallContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 191;
                this.match(SourcerustParser.IDENT);
                this.state = 192;
                this.match(SourcerustParser.T__5);
                this.state = 201;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2147483714) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 63) !== 0)) {
                    {
                    this.state = 193;
                    this.expression(0);
                    this.state = 198;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 8) {
                        {
                        {
                        this.state = 194;
                        this.match(SourcerustParser.T__7);
                        this.state = 195;
                        this.expression(0);
                        }
                        }
                        this.state = 200;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 203;
                this.match(SourcerustParser.T__6);
                }
                break;
            case 4:
                {
                localContext = new ParensContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 204;
                this.match(SourcerustParser.T__5);
                this.state = 205;
                this.expression(0);
                this.state = 206;
                this.match(SourcerustParser.T__6);
                }
                break;
            case 5:
                {
                localContext = new IntLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 208;
                this.match(SourcerustParser.INT);
                }
                break;
            case 6:
                {
                localContext = new StringLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 209;
                this.match(SourcerustParser.STRING);
                }
                break;
            case 7:
                {
                localContext = new TrueKeywordContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 210;
                this.match(SourcerustParser.TRUE);
                }
                break;
            case 8:
                {
                localContext = new FalseKewordContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 211;
                this.match(SourcerustParser.FALSE);
                }
                break;
            case 9:
                {
                localContext = new CharLiteralContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 212;
                this.match(SourcerustParser.CHAR_LITERAL);
                }
                break;
            case 10:
                {
                localContext = new IdentifierContext(localContext);
                this.context = localContext;
                previousContext = localContext;
                this.state = 213;
                this.match(SourcerustParser.IDENT);
                }
                break;
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 256;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this.parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 254;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 24, this.context) ) {
                    case 1:
                        {
                        localContext = new MulContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 216;
                        if (!(this.precpred(this.context, 22))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 22)");
                        }
                        this.state = 217;
                        this.match(SourcerustParser.T__11);
                        this.state = 218;
                        this.expression(23);
                        }
                        break;
                    case 2:
                        {
                        localContext = new DivContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 219;
                        if (!(this.precpred(this.context, 21))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 21)");
                        }
                        this.state = 220;
                        this.match(SourcerustParser.T__12);
                        this.state = 221;
                        this.expression(22);
                        }
                        break;
                    case 3:
                        {
                        localContext = new AddContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 222;
                        if (!(this.precpred(this.context, 20))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 20)");
                        }
                        this.state = 223;
                        this.match(SourcerustParser.T__13);
                        this.state = 224;
                        this.expression(21);
                        }
                        break;
                    case 4:
                        {
                        localContext = new SubContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 225;
                        if (!(this.precpred(this.context, 19))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 19)");
                        }
                        this.state = 226;
                        this.match(SourcerustParser.T__14);
                        this.state = 227;
                        this.expression(20);
                        }
                        break;
                    case 5:
                        {
                        localContext = new ModContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 228;
                        if (!(this.precpred(this.context, 18))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 18)");
                        }
                        this.state = 229;
                        this.match(SourcerustParser.T__15);
                        this.state = 230;
                        this.expression(19);
                        }
                        break;
                    case 6:
                        {
                        localContext = new LtExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 231;
                        if (!(this.precpred(this.context, 17))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 17)");
                        }
                        this.state = 232;
                        this.match(SourcerustParser.T__16);
                        this.state = 233;
                        this.expression(18);
                        }
                        break;
                    case 7:
                        {
                        localContext = new LeqExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 234;
                        if (!(this.precpred(this.context, 16))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 16)");
                        }
                        this.state = 235;
                        this.match(SourcerustParser.T__17);
                        this.state = 236;
                        this.expression(17);
                        }
                        break;
                    case 8:
                        {
                        localContext = new GeqExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 237;
                        if (!(this.precpred(this.context, 15))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 15)");
                        }
                        this.state = 238;
                        this.match(SourcerustParser.T__18);
                        this.state = 239;
                        this.expression(16);
                        }
                        break;
                    case 9:
                        {
                        localContext = new GtExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 240;
                        if (!(this.precpred(this.context, 14))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 14)");
                        }
                        this.state = 241;
                        this.match(SourcerustParser.T__19);
                        this.state = 242;
                        this.expression(15);
                        }
                        break;
                    case 10:
                        {
                        localContext = new EqExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 243;
                        if (!(this.precpred(this.context, 13))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 13)");
                        }
                        this.state = 244;
                        this.match(SourcerustParser.T__20);
                        this.state = 245;
                        this.expression(14);
                        }
                        break;
                    case 11:
                        {
                        localContext = new NeqExprContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 246;
                        if (!(this.precpred(this.context, 12))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 12)");
                        }
                        this.state = 247;
                        this.match(SourcerustParser.T__21);
                        this.state = 248;
                        this.expression(13);
                        }
                        break;
                    case 12:
                        {
                        localContext = new ArrayAccessContext(new ExpressionContext(parentContext, parentState));
                        this.pushNewRecursionContext(localContext, _startState, SourcerustParser.RULE_expression);
                        this.state = 249;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 250;
                        this.match(SourcerustParser.T__1);
                        this.state = 251;
                        this.expression(0);
                        this.state = 252;
                        this.match(SourcerustParser.T__2);
                        }
                        break;
                    }
                    }
                }
                this.state = 258;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 25, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 36, SourcerustParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 259;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 31) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.ParserRuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 1:
            return this.type_sempred(localContext as TypeContext, predIndex);
        case 17:
            return this.expression_sempred(localContext as ExpressionContext, predIndex);
        }
        return true;
    }
    private type_sempred(localContext: TypeContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 1);
        }
        return true;
    }
    private expression_sempred(localContext: ExpressionContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 1:
            return this.precpred(this.context, 22);
        case 2:
            return this.precpred(this.context, 21);
        case 3:
            return this.precpred(this.context, 20);
        case 4:
            return this.precpred(this.context, 19);
        case 5:
            return this.precpred(this.context, 18);
        case 6:
            return this.precpred(this.context, 17);
        case 7:
            return this.precpred(this.context, 16);
        case 8:
            return this.precpred(this.context, 15);
        case 9:
            return this.precpred(this.context, 14);
        case 10:
            return this.precpred(this.context, 13);
        case 11:
            return this.precpred(this.context, 12);
        case 12:
            return this.precpred(this.context, 11);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,44,262,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,
        6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,
        2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,1,0,5,0,40,8,0,
        10,0,12,0,43,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,52,8,1,1,1,3,1,
        55,8,1,1,1,1,1,1,1,5,1,60,8,1,10,1,12,1,63,9,1,1,2,1,2,5,2,67,8,
        2,10,2,12,2,70,9,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,82,
        8,3,1,4,1,4,1,4,1,4,3,4,88,8,4,1,4,1,4,3,4,92,8,4,1,4,3,4,95,8,4,
        1,4,1,4,1,5,1,5,1,5,5,5,102,8,5,10,5,12,5,105,9,5,1,6,3,6,108,8,
        6,1,6,3,6,111,8,6,1,6,1,6,1,6,1,6,1,7,1,7,1,8,1,8,1,9,1,9,1,10,1,
        10,3,10,125,8,10,1,10,1,10,1,10,1,10,1,10,3,10,132,8,10,1,10,1,10,
        1,11,1,11,1,11,3,11,139,8,11,1,11,1,11,1,12,1,12,1,12,3,12,146,8,
        12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,157,8,13,1,
        14,1,14,3,14,161,8,14,1,14,1,14,1,15,1,15,1,15,1,15,1,16,1,16,1,
        16,1,17,1,17,1,17,1,17,1,17,1,17,1,17,5,17,179,8,17,10,17,12,17,
        182,9,17,3,17,184,8,17,1,17,1,17,1,17,3,17,189,8,17,1,17,1,17,1,
        17,1,17,1,17,1,17,5,17,197,8,17,10,17,12,17,200,9,17,3,17,202,8,
        17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,215,
        8,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
        5,17,255,8,17,10,17,12,17,258,9,17,1,18,1,18,1,18,0,2,2,34,19,0,
        2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,0,1,1,0,38,42,
        293,0,41,1,0,0,0,2,54,1,0,0,0,4,64,1,0,0,0,6,81,1,0,0,0,8,83,1,0,
        0,0,10,98,1,0,0,0,12,107,1,0,0,0,14,116,1,0,0,0,16,118,1,0,0,0,18,
        120,1,0,0,0,20,122,1,0,0,0,22,135,1,0,0,0,24,142,1,0,0,0,26,156,
        1,0,0,0,28,158,1,0,0,0,30,164,1,0,0,0,32,168,1,0,0,0,34,214,1,0,
        0,0,36,259,1,0,0,0,38,40,3,6,3,0,39,38,1,0,0,0,40,43,1,0,0,0,41,
        39,1,0,0,0,41,42,1,0,0,0,42,44,1,0,0,0,43,41,1,0,0,0,44,45,5,0,0,
        1,45,1,1,0,0,0,46,47,6,1,-1,0,47,55,5,32,0,0,48,55,5,33,0,0,49,51,
        5,1,0,0,50,52,5,30,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,53,1,0,0,0,
        53,55,3,2,1,2,54,46,1,0,0,0,54,48,1,0,0,0,54,49,1,0,0,0,55,61,1,
        0,0,0,56,57,10,1,0,0,57,58,5,2,0,0,58,60,5,3,0,0,59,56,1,0,0,0,60,
        63,1,0,0,0,61,59,1,0,0,0,61,62,1,0,0,0,62,3,1,0,0,0,63,61,1,0,0,
        0,64,68,5,4,0,0,65,67,3,6,3,0,66,65,1,0,0,0,67,70,1,0,0,0,68,66,
        1,0,0,0,68,69,1,0,0,0,69,71,1,0,0,0,70,68,1,0,0,0,71,72,5,5,0,0,
        72,5,1,0,0,0,73,82,3,20,10,0,74,82,3,26,13,0,75,82,3,28,14,0,76,
        82,3,30,15,0,77,82,3,32,16,0,78,82,3,8,4,0,79,82,3,18,9,0,80,82,
        3,22,11,0,81,73,1,0,0,0,81,74,1,0,0,0,81,75,1,0,0,0,81,76,1,0,0,
        0,81,77,1,0,0,0,81,78,1,0,0,0,81,79,1,0,0,0,81,80,1,0,0,0,82,7,1,
        0,0,0,83,84,5,24,0,0,84,85,5,37,0,0,85,87,5,6,0,0,86,88,3,10,5,0,
        87,86,1,0,0,0,87,88,1,0,0,0,88,89,1,0,0,0,89,91,5,7,0,0,90,92,5,
        36,0,0,91,90,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,95,3,2,1,0,94,
        93,1,0,0,0,94,95,1,0,0,0,95,96,1,0,0,0,96,97,3,4,2,0,97,9,1,0,0,
        0,98,103,3,12,6,0,99,100,5,8,0,0,100,102,3,12,6,0,101,99,1,0,0,0,
        102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,11,1,0,0,0,105,
        103,1,0,0,0,106,108,3,14,7,0,107,106,1,0,0,0,107,108,1,0,0,0,108,
        110,1,0,0,0,109,111,3,16,8,0,110,109,1,0,0,0,110,111,1,0,0,0,111,
        112,1,0,0,0,112,113,5,37,0,0,113,114,5,9,0,0,114,115,3,2,1,0,115,
        13,1,0,0,0,116,117,5,1,0,0,117,15,1,0,0,0,118,119,5,30,0,0,119,17,
        1,0,0,0,120,121,5,10,0,0,121,19,1,0,0,0,122,124,5,25,0,0,123,125,
        5,30,0,0,124,123,1,0,0,0,124,125,1,0,0,0,125,126,1,0,0,0,126,127,
        5,37,0,0,127,128,5,9,0,0,128,131,3,2,1,0,129,130,5,11,0,0,130,132,
        3,34,17,0,131,129,1,0,0,0,131,132,1,0,0,0,132,133,1,0,0,0,133,134,
        5,10,0,0,134,21,1,0,0,0,135,136,5,34,0,0,136,138,3,34,17,0,137,139,
        5,35,0,0,138,137,1,0,0,0,138,139,1,0,0,0,139,140,1,0,0,0,140,141,
        3,34,17,0,141,23,1,0,0,0,142,145,5,12,0,0,143,146,3,24,12,0,144,
        146,5,37,0,0,145,143,1,0,0,0,145,144,1,0,0,0,146,25,1,0,0,0,147,
        148,3,34,17,0,148,149,5,11,0,0,149,150,3,34,17,0,150,151,5,10,0,
        0,151,157,1,0,0,0,152,153,3,24,12,0,153,154,5,11,0,0,154,155,3,34,
        17,0,155,157,1,0,0,0,156,147,1,0,0,0,156,152,1,0,0,0,157,27,1,0,
        0,0,158,160,5,26,0,0,159,161,3,34,17,0,160,159,1,0,0,0,160,161,1,
        0,0,0,161,162,1,0,0,0,162,163,5,10,0,0,163,29,1,0,0,0,164,165,5,
        27,0,0,165,166,3,34,17,0,166,167,3,4,2,0,167,31,1,0,0,0,168,169,
        3,34,17,0,169,170,5,10,0,0,170,33,1,0,0,0,171,172,6,17,-1,0,172,
        173,5,31,0,0,173,174,5,23,0,0,174,183,5,2,0,0,175,180,3,34,17,0,
        176,177,5,8,0,0,177,179,3,34,17,0,178,176,1,0,0,0,179,182,1,0,0,
        0,180,178,1,0,0,0,180,181,1,0,0,0,181,184,1,0,0,0,182,180,1,0,0,
        0,183,175,1,0,0,0,183,184,1,0,0,0,184,185,1,0,0,0,185,215,5,3,0,
        0,186,188,5,1,0,0,187,189,5,30,0,0,188,187,1,0,0,0,188,189,1,0,0,
        0,189,190,1,0,0,0,190,215,5,37,0,0,191,192,5,37,0,0,192,201,5,6,
        0,0,193,198,3,34,17,0,194,195,5,8,0,0,195,197,3,34,17,0,196,194,
        1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,202,
        1,0,0,0,200,198,1,0,0,0,201,193,1,0,0,0,201,202,1,0,0,0,202,203,
        1,0,0,0,203,215,5,7,0,0,204,205,5,6,0,0,205,206,3,34,17,0,206,207,
        5,7,0,0,207,215,1,0,0,0,208,215,5,38,0,0,209,215,5,39,0,0,210,215,
        5,41,0,0,211,215,5,42,0,0,212,215,5,40,0,0,213,215,5,37,0,0,214,
        171,1,0,0,0,214,186,1,0,0,0,214,191,1,0,0,0,214,204,1,0,0,0,214,
        208,1,0,0,0,214,209,1,0,0,0,214,210,1,0,0,0,214,211,1,0,0,0,214,
        212,1,0,0,0,214,213,1,0,0,0,215,256,1,0,0,0,216,217,10,22,0,0,217,
        218,5,12,0,0,218,255,3,34,17,23,219,220,10,21,0,0,220,221,5,13,0,
        0,221,255,3,34,17,22,222,223,10,20,0,0,223,224,5,14,0,0,224,255,
        3,34,17,21,225,226,10,19,0,0,226,227,5,15,0,0,227,255,3,34,17,20,
        228,229,10,18,0,0,229,230,5,16,0,0,230,255,3,34,17,19,231,232,10,
        17,0,0,232,233,5,17,0,0,233,255,3,34,17,18,234,235,10,16,0,0,235,
        236,5,18,0,0,236,255,3,34,17,17,237,238,10,15,0,0,238,239,5,19,0,
        0,239,255,3,34,17,16,240,241,10,14,0,0,241,242,5,20,0,0,242,255,
        3,34,17,15,243,244,10,13,0,0,244,245,5,21,0,0,245,255,3,34,17,14,
        246,247,10,12,0,0,247,248,5,22,0,0,248,255,3,34,17,13,249,250,10,
        11,0,0,250,251,5,2,0,0,251,252,3,34,17,0,252,253,5,3,0,0,253,255,
        1,0,0,0,254,216,1,0,0,0,254,219,1,0,0,0,254,222,1,0,0,0,254,225,
        1,0,0,0,254,228,1,0,0,0,254,231,1,0,0,0,254,234,1,0,0,0,254,237,
        1,0,0,0,254,240,1,0,0,0,254,243,1,0,0,0,254,246,1,0,0,0,254,249,
        1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,35,1,
        0,0,0,258,256,1,0,0,0,259,260,7,0,0,0,260,37,1,0,0,0,26,41,51,54,
        61,68,81,87,91,94,103,107,110,124,131,138,145,156,160,180,183,188,
        198,201,214,254,256
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!SourcerustParser.__ATN) {
            SourcerustParser.__ATN = new antlr.ATNDeserializer().deserialize(SourcerustParser._serializedATN);
        }

        return SourcerustParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(SourcerustParser.literalNames, SourcerustParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return SourcerustParser.vocabulary;
    }

    private static readonly decisionsToDFA = SourcerustParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.EOF, 0)!;
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_prog;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterProg) {
             listener.enterProg(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitProg) {
             listener.exitProg(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitProg) {
            return visitor.visitProg(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class TypeContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public U16(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.U16, 0);
    }
    public STR(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.STR, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.MUT, 0);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_type;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterType) {
             listener.enterType(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitType) {
             listener.exitType(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitType) {
            return visitor.visitType(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class BlockContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_block;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterBlock) {
             listener.enterBlock(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitBlock) {
             listener.exitBlock(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitBlock) {
            return visitor.visitBlock(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public letStmt(): LetStmtContext | null {
        return this.getRuleContext(0, LetStmtContext);
    }
    public assignStmt(): AssignStmtContext | null {
        return this.getRuleContext(0, AssignStmtContext);
    }
    public returnStmt(): ReturnStmtContext | null {
        return this.getRuleContext(0, ReturnStmtContext);
    }
    public whileStmt(): WhileStmtContext | null {
        return this.getRuleContext(0, WhileStmtContext);
    }
    public exprStmt(): ExprStmtContext | null {
        return this.getRuleContext(0, ExprStmtContext);
    }
    public function(): FunctionContext | null {
        return this.getRuleContext(0, FunctionContext);
    }
    public emptyStmt(): EmptyStmtContext | null {
        return this.getRuleContext(0, EmptyStmtContext);
    }
    public condStmt(): CondStmtContext | null {
        return this.getRuleContext(0, CondStmtContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_stmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public FN(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.FN, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public paramList(): ParamListContext | null {
        return this.getRuleContext(0, ParamListContext);
    }
    public ARROW(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.ARROW, 0);
    }
    public type(): TypeContext | null {
        return this.getRuleContext(0, TypeContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_function;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterFunction) {
             listener.enterFunction(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitFunction) {
             listener.exitFunction(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public param(): ParamContext[];
    public param(i: number): ParamContext | null;
    public param(i?: number): ParamContext[] | ParamContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParamContext);
        }

        return this.getRuleContext(i, ParamContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_paramList;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterParamList) {
             listener.enterParamList(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitParamList) {
             listener.exitParamList(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitParamList) {
            return visitor.visitParamList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParamContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public refModifier(): RefModifierContext | null {
        return this.getRuleContext(0, RefModifierContext);
    }
    public mutModifier(): MutModifierContext | null {
        return this.getRuleContext(0, MutModifierContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_param;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterParam) {
             listener.enterParam(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitParam) {
             listener.exitParam(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitParam) {
            return visitor.visitParam(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class RefModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_refModifier;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterRefModifier) {
             listener.enterRefModifier(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitRefModifier) {
             listener.exitRefModifier(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitRefModifier) {
            return visitor.visitRefModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MutModifierContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MUT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.MUT, 0)!;
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_mutModifier;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterMutModifier) {
             listener.enterMutModifier(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitMutModifier) {
             listener.exitMutModifier(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitMutModifier) {
            return visitor.visitMutModifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class EmptyStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_emptyStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterEmptyStmt) {
             listener.enterEmptyStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitEmptyStmt) {
             listener.exitEmptyStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitEmptyStmt) {
            return visitor.visitEmptyStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LetStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LET(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.LET, 0)!;
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public type(): TypeContext {
        return this.getRuleContext(0, TypeContext)!;
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.MUT, 0);
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_letStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterLetStmt) {
             listener.enterLetStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitLetStmt) {
             listener.exitLetStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitLetStmt) {
            return visitor.visitLetStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CondStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public IF(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IF, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public ELSE(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.ELSE, 0);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_condStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterCondStmt) {
             listener.enterCondStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitCondStmt) {
             listener.exitCondStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitCondStmt) {
            return visitor.visitCondStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class DerefExprContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public derefExpr(): DerefExprContext | null {
        return this.getRuleContext(0, DerefExprContext);
    }
    public IDENT(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.IDENT, 0);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_derefExpr;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterDerefExpr) {
             listener.enterDerefExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitDerefExpr) {
             listener.exitDerefExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitDerefExpr) {
            return visitor.visitDerefExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AssignStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public derefExpr(): DerefExprContext | null {
        return this.getRuleContext(0, DerefExprContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_assignStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterAssignStmt) {
             listener.enterAssignStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitAssignStmt) {
             listener.exitAssignStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitAssignStmt) {
            return visitor.visitAssignStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ReturnStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public RETURN(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.RETURN, 0)!;
    }
    public expression(): ExpressionContext | null {
        return this.getRuleContext(0, ExpressionContext);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_returnStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterReturnStmt) {
             listener.enterReturnStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitReturnStmt) {
             listener.exitReturnStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitReturnStmt) {
            return visitor.visitReturnStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WhileStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public WHILE(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.WHILE, 0)!;
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public block(): BlockContext {
        return this.getRuleContext(0, BlockContext)!;
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_whileStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterWhileStmt) {
             listener.enterWhileStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitWhileStmt) {
             listener.exitWhileStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitWhileStmt) {
            return visitor.visitWhileStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExprStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_exprStmt;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterExprStmt) {
             listener.enterExprStmt(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitExprStmt) {
             listener.exitExprStmt(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitExprStmt) {
            return visitor.visitExprStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ExpressionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_expression;
    }
    public override copyFrom(ctx: ExpressionContext): void {
        super.copyFrom(ctx);
    }
}
export class AddContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterAdd) {
             listener.enterAdd(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitAdd) {
             listener.exitAdd(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitAdd) {
            return visitor.visitAdd(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class SubContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterSub) {
             listener.enterSub(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitSub) {
             listener.exitSub(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitSub) {
            return visitor.visitSub(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LeqExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterLeqExpr) {
             listener.enterLeqExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitLeqExpr) {
             listener.exitLeqExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitLeqExpr) {
            return visitor.visitLeqExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ModContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterMod) {
             listener.enterMod(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitMod) {
             listener.exitMod(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitMod) {
            return visitor.visitMod(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class CharLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public CHAR_LITERAL(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.CHAR_LITERAL, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterCharLiteral) {
             listener.enterCharLiteral(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitCharLiteral) {
             listener.exitCharLiteral(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitCharLiteral) {
            return visitor.visitCharLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class MulContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterMul) {
             listener.enterMul(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitMul) {
             listener.exitMul(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitMul) {
            return visitor.visitMul(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GeqExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterGeqExpr) {
             listener.enterGeqExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitGeqExpr) {
             listener.exitGeqExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitGeqExpr) {
            return visitor.visitGeqExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ParensContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext {
        return this.getRuleContext(0, ExpressionContext)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterParens) {
             listener.enterParens(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitParens) {
             listener.exitParens(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitParens) {
            return visitor.visitParens(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class LtExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterLtExpr) {
             listener.enterLtExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitLtExpr) {
             listener.exitLtExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitLtExpr) {
            return visitor.visitLtExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class GtExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterGtExpr) {
             listener.enterGtExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitGtExpr) {
             listener.exitGtExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitGtExpr) {
            return visitor.visitGtExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class VecMacroContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public VEC(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.VEC, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterVecMacro) {
             listener.enterVecMacro(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitVecMacro) {
             listener.exitVecMacro(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitVecMacro) {
            return visitor.visitVecMacro(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class DivContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterDiv) {
             listener.enterDiv(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitDiv) {
             listener.exitDiv(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitDiv) {
            return visitor.visitDiv(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FuncCallContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterFuncCall) {
             listener.enterFuncCall(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitFuncCall) {
             listener.exitFuncCall(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitFuncCall) {
            return visitor.visitFuncCall(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class TrueKeywordContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public TRUE(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.TRUE, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterTrueKeyword) {
             listener.enterTrueKeyword(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitTrueKeyword) {
             listener.exitTrueKeyword(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitTrueKeyword) {
            return visitor.visitTrueKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class RefContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public MUT(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.MUT, 0);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterRef) {
             listener.enterRef(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitRef) {
             listener.exitRef(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitRef) {
            return visitor.visitRef(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class ArrayAccessContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterArrayAccess) {
             listener.enterArrayAccess(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitArrayAccess) {
             listener.exitArrayAccess(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitArrayAccess) {
            return visitor.visitArrayAccess(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IdentifierContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public IDENT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.IDENT, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterIdentifier) {
             listener.enterIdentifier(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitIdentifier) {
             listener.exitIdentifier(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitIdentifier) {
            return visitor.visitIdentifier(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class StringLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.STRING, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterStringLiteral) {
             listener.enterStringLiteral(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitStringLiteral) {
             listener.exitStringLiteral(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitStringLiteral) {
            return visitor.visitStringLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class EqExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterEqExpr) {
             listener.enterEqExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitEqExpr) {
             listener.exitEqExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitEqExpr) {
            return visitor.visitEqExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class NeqExprContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public expression(): ExpressionContext[];
    public expression(i: number): ExpressionContext | null;
    public expression(i?: number): ExpressionContext[] | ExpressionContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ExpressionContext);
        }

        return this.getRuleContext(i, ExpressionContext);
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterNeqExpr) {
             listener.enterNeqExpr(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitNeqExpr) {
             listener.exitNeqExpr(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitNeqExpr) {
            return visitor.visitNeqExpr(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class IntLiteralContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public INT(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.INT, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterIntLiteral) {
             listener.enterIntLiteral(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitIntLiteral) {
             listener.exitIntLiteral(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitIntLiteral) {
            return visitor.visitIntLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
export class FalseKewordContext extends ExpressionContext {
    public constructor(ctx: ExpressionContext) {
        super(ctx.parent, ctx.invokingState);
        super.copyFrom(ctx);
    }
    public FALSE(): antlr.TerminalNode {
        return this.getToken(SourcerustParser.FALSE, 0)!;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterFalseKeword) {
             listener.enterFalseKeword(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitFalseKeword) {
             listener.exitFalseKeword(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitFalseKeword) {
            return visitor.visitFalseKeword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public INT(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.INT, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.STRING, 0);
    }
    public TRUE(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.TRUE, 0);
    }
    public FALSE(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.FALSE, 0);
    }
    public CHAR_LITERAL(): antlr.TerminalNode | null {
        return this.getToken(SourcerustParser.CHAR_LITERAL, 0);
    }
    public override get ruleIndex(): number {
        return SourcerustParser.RULE_literal;
    }
    public override enterRule(listener: SourcerustListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: SourcerustListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: SourcerustVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
