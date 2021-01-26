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

console.log(`quote:"" single:''`);
console.log("quote:\"\" single:''");
