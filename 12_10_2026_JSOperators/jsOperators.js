//Ternary Operator :-  All the tasks are clubbed in this js file 

let age=18.5;
let goodToGo=(age>=18)?"Yes":"No";

console.log(goodToGo);
//============================

let actualCode=200;
let expetedCode=200;

let testResult=(actualCode===expetedCode)?"Pass":"Fail";
console.log(testResult);
//====================================

let enviroment="staging";

//let env1="prod";

let resultProd=enviroment==="prod" ? "www.prod.com":"www.staging.com";
console.log(resultProd);
//====================================

let isCI=true;
let resultBr=isCI? "Headless" : "Headed";
console.log(resultBr);
//====================================

let resTime=850;
let sla=1000;
let statusTime = resTime<=sla ? "Within SLA" : "SLA breached";

console.log(`Response time is - ${resTime} - ${statusTime}`);

/*In JavaScript, backticks (`) are used to define template literals (previously 
 known as template strings). Introduced in ES6, they provide a powerful, 
 cleaner alternative to traditional single quotes (') or double quotes (") */

 //=======================================================================================

 let booleanStaus=true;

 let ans =booleanStaus ? true : false;

 console.log("The answer is :" +ans);
 console.log(`The value is ${ans}`);

 //=======================================================================================




