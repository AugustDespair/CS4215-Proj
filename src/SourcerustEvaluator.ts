import { BasicEvaluator } from "conductor/dist/conductor/runner";
import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
import { SourcerustLexer } from "./parser/SourcerustLexer";
import { ExpressionContext, ProgContext, SourcerustParser } from './parser/SourcerustParser';
import { SourcerustVisitor } from './parser/SourcerustVisitor';
import { CompilerVisitor } from "./vm/compiler";
import { run_instructions } from "./vm/machine";
import { TypeCheckerVisitor } from "./type/typecheck";

export class SourcerustEvaluator extends BasicEvaluator {
    private executionCount: number;
    private compiler: CompilerVisitor;

    constructor(conductor: IRunnerPlugin) {
        super(conductor);
        this.executionCount = 0;
        this.compiler = new CompilerVisitor();
    }

    async evaluateChunk(chunk: string): Promise<void> {
        this.executionCount++;
        try {
            // Create the lexer and parser
            const inputStream = CharStream.fromString(chunk);
            const lexer = new SourcerustLexer(inputStream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new SourcerustParser(tokenStream);
            const typeChecker = new TypeCheckerVisitor();
            const compiler = new CompilerVisitor();
            
            // Parse the input
            const tree = parser.prog();
        
            // Evaluate the parsed tree
            typeChecker.visit(tree);
            this.compiler.visit(tree);
            const instrs = this.compiler.get_instrs();
            

            const result = run_instructions(instrs);

            // Send the result to the REPL
            this.conductor.sendOutput(`Result of expression: ${result}`);
        }  catch (error) {
            // Handle errors and send them to the REPL
            if (error instanceof Error) {
                this.conductor.sendOutput(`Error: ${error.message}`);
            } else {
                this.conductor.sendOutput(`Error: ${String(error)}`);
            }
        }
    }


}