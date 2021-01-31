`use strict`;

const number3 = document.querySelector('#day option:checked').value;
//const number1 = document.querySelector("#price"); //12
const number2 = document.querySelector("#quantity"); //15
const result = document.querySelector("#result");

const multiplyButton = document.querySelector("#mult");

// return the values entered by the user
const getValues = () => {
    return [Number.parseFloat(number2.value), number3];
}

const printValue = (newResult) => {
    result.value = newResult;
}
const multiply = () => {
    const [num2, num3] = getValues();
    const newResult = num2 * num3;
    printValue(`£ ${newResult}`);
}
multiplyButton.addEventListener("click", multiply);