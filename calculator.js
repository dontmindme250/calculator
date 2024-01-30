let currentInput = '';
let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === 'sqrt') {
        currentInput += 'Math.sqrt(' + currentInput + ')';
    } else if (value === '^') {
        currentInput += '**';
    } else if (value === 'sin' || value === 'cos' || value === 'tan') {
        currentInput += 'Math.' + value + '(' + currentInput + ')';
    } else if (value === 'fraction') {
        currentInput += '1/';
    } else if (value === 'X') {
        currentInput += 'x';
    } else if (value === '÷') {
        currentInput += '÷';
    } else {
        currentInput += value;
    }

    const displayText = currentInput.replace(/\*/g, 'x').replace(/÷/g, '÷');
    display.value = displayText;
}

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function calculateResult() {
    try {
        const sanitizedInput = currentInput.replace(/x/g, '*').replace(/÷/g, '/');
        const result = new Function('return ' + sanitizedInput)();
        currentInput = result;
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}