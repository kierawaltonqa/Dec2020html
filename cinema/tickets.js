`use strict`;

//const number3 = document.querySelector('#day option:checked').value;
const number1 = document.querySelector("#price"); //12
const number2 = document.querySelector("#quantity"); //15
const result = document.querySelector("#result");
const basket = document.querySelector(".basket");
const multiplyButton = document.querySelector("#mult");
const clearBasket = document.querySelector("#clearHistory");

const filmTitle = document.querySelector("#film option:checked").value;

// return the values entered by the user
const getValues = () => {
    return [Number.parseFloat(number2.value), Number.parseFloat(number1.value)];
}
const getFilmTitle = () => {
    return filmTitle;
}

const printValue = (newResult) => {
    result.value = newResult;
}
const multiply = () => {
    const film = getFilmTitle();
    const [num1, num2] = getValues();
    const newResult = num1 * num2;
    printValue(`£ ${newResult}`);
    basket2(num2, num1, newResult, film);
}
//add values to basket - print out in add to basket section
const basket2 = (num1, num2, result, film) => {
    const newBasket = document.createElement("p");
    const newText = document.createTextNode(`${num2} tickets for ${film} with price £${num1}, total: £${result}`)
    newBasket.appendChild(newText);
    basket.appendChild(newBasket);
}
//clear all values from basket 
const basketClear = () => {
    basket.innerHTML = "";
}

multiplyButton.addEventListener("click", multiply);
clearBasket.addEventListener("click", basketClear);
