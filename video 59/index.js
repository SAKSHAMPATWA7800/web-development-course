/* Create a faualty calculator using JavaScript

This faulty calculator does folowing:
1. It takes two numbers as input from the user
2. It performs wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/

// Faulty Calculator

let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

// Generate a random number
let random = Math.random();

let result;

// 10% chance of wrong calculation
if (random < 0.1) {
    switch (operator) {
        case "+":
            result = num1 - num2;
            break;

        case "-":
            result = num1 / num2;
            break;

        case "*":
            result = num1 + num2;
            break;

        case "/":
            result = num1 ** num2;
            break;

        default:
            console.log("Invalid operator");
            result = null;
    }

    console.log("⚠ Faulty Calculation Performed!");
} else {
    // Correct calculation
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        default:
            console.log("Invalid operator");
            result = null;
    }

    console.log("✅ Correct Calculation Performed!");
}

if (result !== null) {
    console.log(`Result: ${result}`);
    alert(`Result: ${result}`);
}