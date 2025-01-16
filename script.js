// let num1 = document.getElementById("num1");
// let num2 = document.getElementById("num2");
// let Add = document.getElementById("Add");
// let Subtract = document.getElementById("Subtract");
// let Multiply = document.getElementById("Multiply");
// let Divide = document.getElementById("Divide");
// let Percentage = document.getElementById("Percentage"); // Get the button
// let Equal_to = document.getElementById("Equal_to");
// let Answer = document.getElementById("Answer");

// function fun_add() {
//     let result = parseFloat(num1.value) + parseFloat(num2.value);
//     Answer.innerText = `Answer: ${result}`;
// }

// function fun_subtract() {
//     let result = parseFloat(num1.value) - parseFloat(num2.value);
//     Answer.innerText = `Answer: ${result}`;
// }

// function fun_multiply() {
//     let result = parseFloat(num1.value) * parseFloat(num2.value);
//     Answer.innerText = `Answer: ${result}`;
// }

// function fun_divide() {
//     if (parseFloat(num2.value) === 0) {
//         Answer.innerText = "Error: Cannot divide by zero!";
//     } else {
//         let result = parseFloat(num1.value) / parseFloat(num2.value);
//         Answer.innerText = `Answer: ${result}`;
//     }
// }

// function fun_percentage() {
//     if (parseFloat(num2.value) === 0) {
//         Answer.innerText = "Error: Cannot divide by zero!";
//     } else {
//         let result = (parseFloat(num1.value) / parseFloat(num2.value)) * 100;
//         Answer.innerText = `Answer: ${result}%`;
//     }
// }

// // Assign event listeners
// Add.onclick = fun_add;
// Subtract.onclick = fun_subtract;
// Multiply.onclick = fun_multiply;
// Divide.onclick = fun_divide;
// Percentage.onclick = fun_percentage; // Assign event listener

// // Optional Equal_to functionality
// Equal_to.onclick = () => {
//     Answer.innerText = "Click an any button (+, -, *, /) to calculate!";
// };


// -------------------------------------------------------2ND METHOD


// Targeting input fields and buttons
// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const answer = document.getElementById("Answer");

// const numberButtons = document.querySelectorAll(".btn.number");
// const addBtn = document.getElementById("Add");
// const subtractBtn = document.getElementById("Subtract");
// const multiplyBtn = document.getElementById("Multiply");
// const divideBtn = document.getElementById("Divide");
// const percentageBtn = document.getElementById("Percentage");
// const equalBtn = document.getElementById("Equal_to");

// // Variables to store values and operator
// let activeInput = num1;
// let operator = "";

// // --- Number Buttons Click Logic ---
// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//         if (activeInput.value.length < 10) { // Limit to avoid very long inputs
//             activeInput.value += button.innerText;
//         }

//         // Switch input focus to num2 if num1 is filled
//         if (num1.value.length > 0 && activeInput === num1) {
//             activeInput = num2;
//         }
//     });
// });

// // --- Operation Buttons Logic ---
// addBtn.addEventListener("click", () => setOperator("+"));
// subtractBtn.addEventListener("click", () => setOperator("-"));
// multiplyBtn.addEventListener("click", () => setOperator("*"));
// divideBtn.addEventListener("click", () => setOperator("/"));
// percentageBtn.addEventListener("click", () => setOperator("%"));

// function setOperator(op) {
//     operator = op;
//     activeInput = num2; // Switch focus to num2
// }

// // --- Equal Button Logic ---
// equalBtn.addEventListener("click", () => {
//     const value1 = parseFloat(num1.value);
//     const value2 = parseFloat(num2.value);

//     if (isNaN(value1) || isNaN(value2)) {
//         answer.innerText = "Error: Enter numbers!";
//         return;
//     }

//     let result = 0;

//     switch (operator) {
//         case "+":
//             result = value1 + value2;
//             break;
//         case "-":
//             result = value1 - value2;
//             break;
//         case "*":
//             result = value1 * value2;
//             break;
//         case "/":
//             result = value2 !== 0 ? value1 / value2 : "Error: Division by 0";
//             break;
//         case "%":
//             result = value1 % value2;
//             break;
//         default:
//             result = "No operation selected";
//     }

//     answer.innerText = `Answer: ${result}`;
// });

// // Reset Button Logic
// const resetBtn = document.getElementById("Reset");

// resetBtn.addEventListener("click", () => {
//     num1.value = "";
//     num2.value = "";
//     answer.innerText = "Answer: 0";
//     activeInput = num1; // Set focus back to num1
//     operator = ""; // Clear the operator
// });









// -------------------3RD METHOD------------------------------------------------------------

// Get references to input fields and answer display elements
const num1 = document.getElementById("num1"); // Input field for the first number
const num2 = document.getElementById("num2"); // Input field for the second number
const answer = document.getElementById("Answer"); // Element to display the answer or result

// Get references to all number buttons and operation buttons
const numberButtons = document.querySelectorAll(".btn.number"); // Select all buttons with the "number" class
const addBtn = document.getElementById("Add"); // Button for addition operation
const subtractBtn = document.getElementById("Subtract"); // Button for subtraction operation
const multiplyBtn = document.getElementById("Multiply"); // Button for multiplication operation
const divideBtn = document.getElementById("Divide"); // Button for division operation
const percentageBtn = document.getElementById("Percentage"); // Button for percentage operation
const equalBtn = document.getElementById("Equal_to"); // Button to calculate and display the result

// Variables to store current input focus and selected operator
let activeInput = num1; // Start with the first input field as active
let operator = ""; // Store the selected mathematical operator

// --- Number Buttons Click Logic ---
// Add event listeners to each number button to append the number to the active input field
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Append the button's text to the active input field if its length is below the limit
        if (activeInput.value.length < 1000) { // Limit input length to 1000 characters
            activeInput.value += button.innerText; // Add the clicked number to the input field
        }
    });
});

// --- Operation Buttons Logic ---
// Add event listeners to operator buttons to set the selected operator
addBtn.addEventListener("click", () => setOperator("+")); // Set "+" as the operator for addition
subtractBtn.addEventListener("click", () => setOperator("-")); // Set "-" as the operator for subtraction
multiplyBtn.addEventListener("click", () => setOperator("*")); // Set "*" as the operator for multiplication
divideBtn.addEventListener("click", () => setOperator("/")); // Set "/" as the operator for division
percentageBtn.addEventListener("click", () => setOperator("%")); // Set "%" as the operator for percentage

// Function to set the operator and switch focus to the second input field
function setOperator(op) {
    operator = op; // Store the selected operator
    activeInput = num2; // Change focus to the second input field
}

// --- Equal Button Logic ---
// Add event listener to the equal button to calculate and display the result
equalBtn.addEventListener("click", () => {
    const value1 = parseFloat(num1.value); // Parse the first input as a floating-point number
    const value2 = parseFloat(num2.value); // Parse the second input as a floating-point number

    // Check if either input is not a valid number
    if (isNaN(value1) || isNaN(value2)) {
        answer.innerText = "Error: Enter numbers!"; // Display an error message
        return; // Exit the function to prevent further execution
    }

    let result = 0; // Variable to store the calculation result

    // Perform the operation based on the selected operator
    switch (operator) {
        case "+": // Addition
            result = value1 + value2;
            break;
        case "-": // Subtraction
            result = value1 - value2;
            break;
        case "*": // Multiplication
            result = value1 * value2;
            break;
        case "/": // Division
            result = value2 !== 0 ? value1 / value2 : "Error: Division by 0"; // Check for division by zero
            break;
        case "%": // Modulus
            result = value1 % value2;
            break;
        default: // No operator selected
            result = "No operation selected";
    }

    // Display the calculated result in the answer element
    answer.innerText = `Answer: ${result}`;
});

// --- Reset Button Logic ---
// Add event listener to the reset button to clear all inputs and reset the calculator
const resetBtn = document.getElementById("Reset"); // Reference to the reset button

resetBtn.addEventListener("click", () => {
    num1.value = ""; // Clear the first input field
    num2.value = ""; // Clear the second input field
    answer.innerText = "Answer: 0"; // Reset the answer display to "0"
    activeInput = num1; // Set focus back to the first input field
    operator = ""; // Clear the selected operator
});
