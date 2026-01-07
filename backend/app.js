/** 
Backend entry point.
Executes the pipeline and print results.
**/
const runPipeline=require("../pipeline/workflow");

console.log("Starting Compliance Pipeline...\n");

//Execute pipeline
const results= runPipeline();

//Display results in readable format
console.log("Compliance Evaluation Results:");
console.log(JSON.stringify(results,null,2));
