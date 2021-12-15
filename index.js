let num1 = document.getElementById('number-one');
let num2 = document.getElementById('number-two');

document.getElementById("number-one").textContent = num1;
document.getElementById("number-two").textContent = num2;

let summText = document.getElementById("sum-el");

function add() {
   let add = parseInt(num1.value) + parseInt(num2.value)
   summText.textContent = add
}

function subtract() {
    let subtract = parseInt(num1.value - num2.value);
    summText.textContent = subtract
}

function divide() {
    let divide = parseInt(num1.value / num2.value);
    summText.textContent = divide
}

function multiply() {
    let multiply = parseInt(num1.value * num2.value);
    summText.textContent = multiply
}

