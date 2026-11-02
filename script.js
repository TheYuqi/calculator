function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    switch (operator) {
        case "+":
            return add(a, b);
        case "-":
            return subtract(a, b);
        case "x":
            return multiply(a, b);
        case "/":
            return divide(a, b);
    }
}

function displayContents(a, b, operator) {
    display = document.querySelector("#numbers");

    display.textContent = `${a}${operator}${b}`

}

let num1 = "";
let num2 = "";
let operator = "";

let newCalculation = true;

const numberButtons = document.querySelectorAll(".number-button")

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (operator == "" && num2 == "") {
            if (newCalculation) {
                num1 = button.textContent;
                newCalculation = false;
            }
            else {
                num1 += button.textContent;
            }
        }
        else {
            num2 += button.textContent;
        }

        displayContents(num1, num2, operator);
    })
})

const operatorButtons = document.querySelectorAll(".operator-button")

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        newCalculation = false;
        
        if (num2 != "") {

            if (num2 == "0" && operator == "/") {
                window.alert("Cant do that :).")
            }
            else {
                num1 = Math.round(operate(Number(num1), Number(num2), operator) * 1000) / 1000
                newCalculation = true;
            }
            
            num2 = "";
        }

        if (button.textContent != "=") {
            operator = button.textContent;
        }
        else {
            operator = "";
        }
        displayContents(num1, num2, operator);
        num2 = "";
    })
})

const clearButton = document.querySelector("#clear")

clearButton.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operator = "";

    displayContents(num1, num2, operator);
})