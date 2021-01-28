`use strict`;
const number1 = document.querySelector("#firstNumber"); //12
const number2 = document.querySelector("#secondNumber"); //15
const result = document.querySelector("#result");

const subtractButton = document.querySelector("#sub");
const multiplyButton = document.querySelector("#mult");
const divideButton = document.querySelector("#div");

const clearHistory = document.querySelector("#clearHistory");
const clearVal = document.querySelector("#clearValues");
const history = document.querySelector(".history");

// return the values entered by the user
const getValues = () => {
    return [Number.parseFloat(number1.value), Number.parseFloat(number2.value)];
}

const printValue = (newResult) => {
    result.value = newResult;
}

// methods for each of the calc functions
const add = () => {
    const [num1, num2] = getValues();
    const newResult = num1 + num2;
    // result.value = newResult;
    printValue(newResult);
    showHistory(num1, num2, newResult, "+");
}
const subtract = () => {
    const [num1, num2] = getValues();
    const newResult = num1 - num2;
    //result.value = newResult;
    printValue(newResult);
    showHistory(num1, num2, newResult, "-");
}
const multiply = () => {
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printValue(newResult);
    showHistory(num1, num2, newResult, "x");
}
const divide = () => {
    const [num1, num2] = getValues();
    const newResult = num1 / num2;
    printValue(newResult);
    showHistory(num1, num2, newResult, "/");
}
//function to make the history
const showHistory = (num1, num2, result, operator) => {
    const newHistory = document.createElement("p");
    const theText = document.createTextNode(`${num1} ${operator} ${num2} = ${result}`)
    newHistory.appendChild(theText);
    history.appendChild(newHistory);
}
const clearH = () => {
    history.innerHTML = "";
}
//adding anon values to a button on click
clearValues.addEventListener("click", () => {
    number1.value = "";
    number2.value = "";
    result.value = "";
});

//a way to associate a method with an event
subtractButton.addEventListener("click", subtract);
multiplyButton.addEventListener("click", multiply);
divideButton.addEventListener("click", divide);
clearVal.addEventListener("click", clearValues);
clearHistory.addEventListener("click", clearH);