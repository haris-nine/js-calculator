//variables
let display = '';
let num1 = '';
let num2 = '';
let oper = '';
let operation = '';
let ans = 1;

//functions

//operations
function addition() {
    display = Number(num1) + Number(num2);
    updateDisplay();
}

function subtraction() {
    display = Number(num1) - Number(num2);
    updateDisplay();
}

function multiplication() {
    display = Number(num1) * Number(num2);
    updateDisplay();
}

function division() {
    if (Number(num2) === 0) {
        display = 'No dividing by zero, please!';
    } else {
        display = Number(num1) / Number(num2);
    }
    updateDisplay();
}

function percentage() {
    display = (Number(num1) / Number(num2)) * 100;
    display = display.toFixed(2) + "%";
    updateDisplay();
}

function factorial() {
    const number = Number(num1);
    if (number < 0 || !Number.isInteger(number)) {
        display = 'Invalid input for factorial!';
    } else {
        let ans = 1;
        for (let i = 2; i <= number; i++) {
            ans *= i;
        }
        display = ans;
    }
    updateDisplay();
}

//helper function to update display
function updateDisplay() {
    document.getElementById("display").innerHTML = display;
}

//numbers
function numbers() {
    let nums = document.querySelectorAll(".num");

    nums.forEach(el => el.addEventListener("click", beDisplayed));

    function beDisplayed() {
        if (oper === '') {
            num1 += this.innerText;
            num1 = cleanPeriods(num1);
        } else {
            num2 += this.innerText;
            num2 = cleanPeriods(num2);
        }
        document.getElementById("display").innerHTML = `${num1} ${oper} ${num2}`;
    }
}

numbers();

function cleanPeriods(num) {
    const parts = num.split('.');
    if (parts.length > 1) {
        return parts[0] + '.' + parts.slice(1).join('').replace(/\./g, '');
    }
    return num;
}

//operators 
const operations = {
    '+': addition,
    '-': subtraction,
    '/': division,
    '*': multiplication,
    '%': percentage,
    '!': factorial,
};


function operationDecider() {
    if (operations[oper]) {
        operations[oper](); // Calls the corresponding function based on the operator
    }
}

//display
function operators() {
    let ops = document.querySelectorAll(".oper");

    ops.forEach(el => el.addEventListener("click", operated));

    function operated() {
        if (num1 === '') {
            return;
        } else {
            oper = this.innerText;
        }
        document.getElementById("display").innerHTML = `${num1} ${oper} ${num2}`;
    }
}

operators();

//events
document.querySelector("#res").onclick = function () {
    operationDecider();
    num1 = display;
    num2 = '';
    oper = '';
    operation = '';
    ans = 1;
};

document.querySelector("#clear").onclick = function () {
    display = '';
    num1 = '';
    num2 = '';
    oper = '';
    operation = '';
    ans = 1;
    updateDisplay();
};