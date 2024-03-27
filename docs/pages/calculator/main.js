let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByTagName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        display.value += e.target.innerText;
        
    })
});

function evaluate(str) {
    const operations = str.split(/([+\-*/])/);
    for (let i = 0; i < operations.length; i += 2) {
        if (operations[i + 1] === '+') {
            operations[i] = parseFloat(operations[i]) + parseFloat(operations[i + 2]);
        } else if (operations[i + 1] === '-') {
            operations[i] = parseFloat(operations[i]) - parseFloat(operations[i + 2]);
        } else if (operations[i + 1] === '*') {
            operations[i] = parseFloat(operations[i]) * parseFloat(operations[i + 2]);
        } else if (operations[i + 1] === '/') {
            operations[i] = parseFloat(operations[i]) / parseFloat(operations[i + 2]);
        }
    }
    return operations[0];
}

document.getElementById('equals').addEventListener('click', () => {
    display.value = evaluate(display.value);
    console.log(display.value);
});

document.getElementById('clear').addEventListener('click', () => {
    display.value = '';
});