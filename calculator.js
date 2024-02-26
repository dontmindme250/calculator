let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === 'sqrt') {
        currentInput = 'Math.sqrt(' + currentInput + ')';
    } else if (value === '^') {
        currentInput += '**';
    } else if (['sin', 'cos', 'tan'].includes(value)) {
        currentInput = `Math.${value}(` + currentInput + ')';
    } else if (value === 'fraction') {
        currentInput = `1/(${currentInput})`;
    } else if (value === 'X') {
        currentInput += '*';
    } else if (value === '÷') {
        currentInput += '/';
    } else {
        currentInput += value;
    }

    display.value = currentInput.replace(/\*/g, 'X').replace(/\//g, '÷');
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        const result = new Function('return ' + currentInput)();
        currentInput = String(result);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        currentInput = ''; 
    }
}
