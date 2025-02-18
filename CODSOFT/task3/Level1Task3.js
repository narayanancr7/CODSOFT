const display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = null;

// Handle button clicks
document.querySelector('.buttons').addEventListener('click', (event) => {
    const button = event.target;
    const value = button.getAttribute('data-value');

    if (!button.classList.contains('btn')) return;

    if (value === 'C') {
        // Clear display
        currentInput = '';
        previousInput = '';
        operator = null;
        display.textContent = '0';
    } else if (['+', '-', '*', '/'].includes(value)) {
        // Handle operator
        operator = value;
        previousInput = currentInput;
        currentInput = '';
    } else if (value === '=') {
        // Calculate result
        if (previousInput && currentInput && operator) {
            const result = calculate(Number(previousInput), Number(currentInput), operator);
            display.textContent = result;
            currentInput = result;
            previousInput = '';
            operator = null;
        }
    } else {
        // Handle number or decimal
        if (value === '.' && currentInput.includes('.')) return;
        currentInput += value;
        display.textContent = currentInput || '0';
    }
});

// Perform calculation
function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return 0;
    }
}
