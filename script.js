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
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const answer = document.getElementById("Answer");

const numberButtons = document.querySelectorAll(".btn.number");
const addBtn = document.getElementById("Add");
const subtractBtn = document.getElementById("Subtract");
const multiplyBtn = document.getElementById("Multiply");
const divideBtn = document.getElementById("Divide");
const percentageBtn = document.getElementById("Percentage");
const equalBtn = document.getElementById("Equal_to");

// Variables to store values and operator
let activeInput = num1;
let operator = "";

// --- Number Buttons Click Logic ---
numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (activeInput.value.length < 10) { // Limit to avoid very long inputs
            activeInput.value += button.innerText;
        }

        // Switch input focus to num2 if num1 is filled
        if (num1.value.length > 0 && activeInput === num1) {
            activeInput = num2;
        }
    });
});

// --- Operation Buttons Logic ---
addBtn.addEventListener("click", () => setOperator("+"));
subtractBtn.addEventListener("click", () => setOperator("-"));
multiplyBtn.addEventListener("click", () => setOperator("*"));
divideBtn.addEventListener("click", () => setOperator("/"));
percentageBtn.addEventListener("click", () => setOperator("%"));

function setOperator(op) {
    operator = op;
    activeInput = num2; // Switch focus to num2
}

// --- Equal Button Logic ---
equalBtn.addEventListener("click", () => {
    const value1 = parseFloat(num1.value);
    const value2 = parseFloat(num2.value);

    if (isNaN(value1) || isNaN(value2)) {
        answer.innerText = "Error: Enter numbers!";
        return;
    }

    let result = 0;

    switch (operator) {
        case "+":
            result = value1 + value2;
            break;
        case "-":
            result = value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value2 !== 0 ? value1 / value2 : "Error: Division by 0";
            break;
        case "%":
            result = value1 % value2;
            break;
        default:
            result = "No operation selected";
    }

    answer.innerText = `Answer: ${result}`;
});

// Reset Button Logic
const resetBtn = document.getElementById("Reset");

resetBtn.addEventListener("click", () => {
    num1.value = "";
    num2.value = "";
    answer.innerText = "Answer: 0";
    activeInput = num1; // Set focus back to num1
    operator = ""; // Clear the operator
});

