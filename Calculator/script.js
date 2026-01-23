let expression = '';

function number(number) {
    expression += number;
    document.getElementById('result').value = expression;
}

function operator(operator) {
    expression += `${operator}`
    document.getElementById('result').value = expression
}

function result() {
    try {
        expression = eval(expression.replace('÷', '/').replace('×', '*'));
        document.getElementById('result').value = expression
    }
    catch{
        document.getElementById('result').value = 'error'
    }
}

function clearResult() {
    expression = '';
    document.getElementById('result').value = '';
}