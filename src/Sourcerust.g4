grammar Sourcerust;

prog: stmt* EOF;

type
    : U16
    | STR
    | '&' MUT? type
    | type '[' ']'
    ;

block: '{' stmt* '}';

stmt
    : letStmt
    | assignStmt
    | returnStmt
    | whileStmt
    | exprStmt
    | function
    | emptyStmt
    | condStmt
    ;


function: FN IDENT '(' paramList? ')' ARROW? type? block;

paramList: param (',' param)*;

param: refModifier? mutModifier? IDENT ':' type;

refModifier: '&';
mutModifier: MUT;

emptyStmt: ';';
letStmt: LET MUT? IDENT '=' type ('=' expression)? ';';

condStmt: IF expression ELSE? expression;

derefExpr: '*' (derefExpr | IDENT);

assignStmt
    : expression '=' expression ';'
    | derefExpr '=' expression;


returnStmt: RETURN expression? ';';
whileStmt: WHILE expression block;
exprStmt: expression ';';

expression
    : expression '*' expression         # Mul
    | expression '/' expression         # Div
    | expression '+' expression         # Add
    | expression '-' expression         # Sub
    | expression '%' expression         # Mod
    | expression '<' expression         # LtExpr
    | expression '<=' expression        # LeqExpr
    | expression '>=' expression        # GeqExpr
    | expression '>' expression         # GtExpr
    | expression '==' expression        # EqExpr
    | expression '!=' expression        # NeqExpr
    | expression '[' expression ']'     # ArrayAccess
    | 'vec' '!' '[' (expression (',' expression)*)? ']'  # VecMacro
    | '&' 'mut'? IDENT                  # Ref
    | IDENT '(' (expression (',' expression)*)? ')'      # FuncCall
    | '(' expression ')'          # Parens
    | INT                   # IntLiteral
    | STRING                # StringLiteral
    | TRUE                  # TrueKeyword
    | FALSE                 # FalseKeword
    | CHAR_LITERAL          # CharLiteral
    | IDENT                 # Identifier
    ;

literal: INT | STRING | TRUE | FALSE | CHAR_LITERAL;

// Lexer rules
FN: 'fn';
LET: 'let';
RETURN: 'return';
WHILE: 'while';
FOR: 'for';
IN: 'in';
MUT: 'mut';
VEC: 'vec';
U16: 'u16';
STR: 'str';
IF: 'if';
ELSE: 'else';
ARROW: '->';

IDENT: [a-zA-Z_][a-zA-Z0-9_]*;
INT: [0-9]+;
STRING: '"' (~["\\] | '\\' .)* '"';
CHAR_LITERAL
    : '\''  ~['\\\n\r\t] '\''
    ;

TRUE: 'true';
FALSE: 'false';
WS: [ \t\r\n]+ -> skip;
COMMENT: '//' ~[\r\n]* -> skip;
