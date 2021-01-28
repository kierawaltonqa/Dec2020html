`use strict`;

const subtraction = (num1, num2) => {
    console.log(num1 - num2);
}
subtraction(100, 50);

const welcome = (fname, age, gender) => {
    console.log(`my name is ${fname}, I am ${age} years old and of gender ${gender}`);
}
welcome("felix cited", 20, "male")

const powerup = (n1, n2) => Math.pow(n1, n2);
console.log(powerup(3, 3));