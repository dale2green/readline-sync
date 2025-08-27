/*
this is the version with all the code, 
including commented out.
Andrei, made many suggestions, refracturing the 
code to shorter, then even short code.
also, apparently i submitted the code incorrectly, even though i 
submitted to what i could tell from the instructions/direction.
*/
//
//
//

const rs = require("readline-sync");

// let whatOperation = "";
// let firstNum;
// let secNum;
//let sum;
//turn the validOperators to an object to make even further simplified

const validOperationsObject = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};
const validOperators = ["+", "-", "*", "/", "%"];
//simplified per Andrei using builtin methods from readline-Sync
const getOperator = (OpList) => {
  return rs.question("What operation would you like to perform? ", {
    limit: OpList,
    limitMessage: "That is not a valid operation, try again\n",
  });
};
//take out this while/loop and make simple per Andrei
// while (
//   whatOperation !== "+" &&
//   whatOperation !== "-" &&
//   whatOperation !== "*" &&
//   whatOperation !== "/"
// ) {
//   whatOperation = rs.question("What operation would you like to perform? ");

//   if (
//     whatOperation !== "+" &&
//     whatOperation !== "-" &&
//     whatOperation !== "*" &&
//     whatOperation !== "/"
//   ) {
//     console.log("That is not a valid operation, try again\n");
//   }
// }

// Andrei corrected and wants to see the 2 while loops to a single function
const getNumber = (order) => {
  return rs.questionInt(`Please enter the ${order} number: `, {
    limitMessage: "This is not a  number, try again.\n",
  });
};

//commented out due to Andrei suggestion
// while (true) {
//   let input = rs.question("Please enter the first number: ");
//   firstNum = Number(input);
//   if (isNaN(firstNum) || input === "") {
//     console.log("This is not a  number, try again.\n");
//   } else {
//     break;
//   }
// }

// commented out due to Andrei suggestion
// while (true) {
//   let input = rs.question("Please enter the second number: ");
//   secNum = Number(input);
//   if (isNaN(secNum) || input === "") {
//     console.log("This is not a number, try again.\n");
//   } else {
//     break;
//   }
// }

//reneame this function per Andrei suggestion
function calculateResult(operator, a, b, opObj) {
  return opObj[operator](a, b);
  if (whatOperation === "+") return a + b;
  if (whatOperation === "-") return a - b;
  if (whatOperation === "*") return a * b;
  if (whatOperation === "/") return a / b;
}

const runCalculator = (opObj) => {
  const validOperators = Object.keys(opObj);
  const operator = getOperator(validOperators);
  const firstNum = getNumber("first");
  const secNum = getNumber("second");
  const result = calculateResult(operator, firstNum, secNum, opObj);
  console.log("The result is: ", result);
};
runCalculator(validOperationsObject);
