//

const rs = require("readline-sync");

const validOperationsObject = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
  "%": (a, b) => a % b,
};
const validOperators = ["+", "-", "*", "/", "%"];

const getOperator = (OpList) => {
  return rs.question("What operation would you like to perform? ", {
    limit: OpList,
    limitMessage: "That is not a valid operation, try again\n",
  });
};

const getNumber = (order) => {
  return rs.questionInt(`Please enter the ${order} number: `, {
    limitMessage: "This is not a  number, try again.\n",
  });
};

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
