import { initialise } from "conductor/dist/conductor/runner/util/";
import { SourcerustEvaluator } from "./SourcerustEvaluator";

const {runnerPlugin, conduit} = initialise(SourcerustEvaluator);

// import { BasicEvaluator } from "conductor/dist/conductor/runner";
// import { IRunnerPlugin } from "conductor/dist/conductor/runner/types";
// import { CharStream, CommonTokenStream, AbstractParseTreeVisitor } from 'antlr4ng';
// import { SourcerustLexer } from "./parser/SourcerustLexer";
// import { ExpressionContext, ProgContext, SourcerustParser } from './parser/SourcerustParser';
// import { SourcerustVisitor } from './parser/SourcerustVisitor';
// import { CompilerVisitor } from "./vm/compiler";
// import { run_instructions } from "./vm/machine";
// import { TypeCheckerVisitor } from "./type/typecheck";

// function main() {
//     let input = ''; 
//     process.stdin.on('data', chunk => input += chunk);
//     process.stdin.on('end', () =>{ 
//         console.log(input)
//         console.log("File read complete")

//         const inputStream = CharStream.fromString(input);
//         const lexer = new SourcerustLexer(inputStream);
//         const tokenStream = new CommonTokenStream(lexer);
//         const parser = new SourcerustParser(tokenStream);
//         const typeChecker = new TypeCheckerVisitor();
//         const compiler = new CompilerVisitor();

        
//         // Parse the input
//         const tree = parser.prog();
//         console.log("Parse done!\n")
//         // console.log(tree.toStringTree())
//         try {
//           typeChecker.visit(tree);
//           console.log("Type checked")
//             // Parse the input
//           // Evaluate the parsed tree
//           compiler.visit(tree);
  
//           const instrs = compiler.get_instrs();
//           console.log("Compiled!");
//           console.log("Instructions: " + JSON.stringify(instrs))
          
//           const result = run_instructions(instrs);
//           console.log("Result is: " + result);
//         } catch (e) {
//             console.error(e);
//         }
//         // console.log(result);
//         // Evaluate the parsed tree
//         // const result = this.visitor.visit(tree);
        
//         // Send the result to the REPL
//         // this.conductor.sendOutput(`Result of expression: ${result}`);    
//     });

//     }

// main();