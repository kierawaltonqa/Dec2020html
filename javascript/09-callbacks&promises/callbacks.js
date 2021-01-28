`use strict`;

function greeting(name) {
    alert(`Hello ${name}`);
}
function processUserInput(callback) {
    let name = prompt("please enter your name");
    callback(name);
}
processUserInput(greeting);

function yourAge(age) {
    alert(`You are ${age} years old`);
}
function input(cb) {
    let age = prompt("please enter your age");
    cb(age);
}
input(yourAge);

function userInput(callback2) {
    let hair = prompt("what is your hair colour?")
    callback2(hair);
}
userInput((hair) => alert(`your hair colour is ${hair}`));