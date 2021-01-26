'use strict';
// 3 keywords - by default there is no such thing as
// declaring a variable with a specific type
let a = "a"; //a value that changes
const b = "b"; //a set/fixed value
var c = "c"; //VERY BAD PLEASE DON'T USE

a = "I am the lET"; //access vaiable a and change to value b
//b = "something else"; //fixed value 

// to print to console:
console.log(a);
console.info("Info");
console.warn("warning");
console.error("error");

//try and declare your variables as a const if you know it's not going to change
//in all other cases, create it as a let
const fname = "kiera" //string
const year = 2021; //int?
const value = false; //boolean
const num = 2.4; //double

console.log(typeof fname); //string
console.log(typeof year); //number
console.log(typeof value); //boolean
console.log(typeof num); //number

//year = 2022; cannot reassign a const!

// undefined / null
// null = explicitly stating that it's empty at runtime
// undefined = isn't initialised at declaration

let age = null;
let sav; //uninitialised => undefined

console.log(age);
console.log(sav);

//string interpolation / concatenation
let str = "5 + 3 = ";
let val = 5 + 3;
let str2 = str + val;
console.log(str2); // 5 + 3 = 8

// template literal
let string = `5 + 3 = ${5 + 3}`;
console.log(string);

console.log(`quote:"" single:''`); //nicer way
console.log("quote:\"\" single:''"); //escaping characters

// datatypes = dynamic, runtime compiler doesn't know the type until the program is running
let camelCase = "";
camelCase = 2;

console.log(camelCase);

//primitive types = immutable, fixed length, quick to look up
//object = collection of properties, variables are references in memory and they are mutable

//let age; //undefined
//let userID = null; //null

//explanation of VAR and why it's bad

// var x = 12;
// //implicitly done in line 70: var y;

// console.log(`${x}, ${y}`); //12, undefined

// var y = 5;

// let x = 2;
// console.log(`${x},${y}`);
// let y = 5;

function deposit(increment) {
    let balance = 10000;
    console.log(balance);
    return balance + increment;
}
//you can only access balance inside the function, so long as you specify the data type
// deposit(10);
// console.log(balance);