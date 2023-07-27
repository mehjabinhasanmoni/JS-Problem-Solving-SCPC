// Problem :  Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculator(num1, operator, num2) {
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          return "Error: Division by zero is not allowed!";
        }
        return num1 / num2;
      default:
        return "Error: Invalid operator!";
    }
  }

  let inputNumbers = calculator(5, '/', 4)
console.log(inputNumbers);