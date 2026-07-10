const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let operator = '';
let firstOperand = null;

buttons.forEach(button => {
button.addEventListener('click', () => {
const value = button.value;

        if (value === 'C') {
clear();
        } else if (value === '=') {
calculate();
        } else if (value === 'backspace') {
            display.value = display.value.slice(0, -1);
        } else if (['+', '-', '*', '/', '%'].includes(value)) {
            // i want to add backspecae functionality to the calculator so that when the user presses the backspace button, it removes the last character from the current input. This will allow users to correct mistakes without having to clear the entire input. I will implement this by adding a new button for backspace and updating the event listener to handle its functionality.
setOperator(value);
        } else {
appendToDisplay(value);
        }
    });
});

function appendToDisplay(value) {
currentInput += value;
display.value += value;
}

function setOperator(value) {
    if (currentInput === '') return;
    if (firstOperand === null) {
firstOperand = parseFloat(currentInput);
    } else {
calculate();
    }
    operator = value;
    display.value += ' ' + value + ' ';
currentInput = '';
}

function calculate() {
    if (firstOperand === null || currentInput === '' || operator === '') return;
const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
        case '+':
            result = firstOperand + secondOperand;
            break;
        case '-':
            result = firstOperand - secondOperand;
            break;
        case '*':
            result = firstOperand * secondOperand;
            break;
        case '/':
            result = firstOperand / secondOperand;
            break;
        case '%':
            result = firstOperand % secondOperand;
            break;
    }

display.value = result;
firstOperand = result; // Allow chaining
currentInput = '';
    operator = '';
}

function clear() {
currentInput = '';
    operator = '';
firstOperand = null;
display.value = '';
}
