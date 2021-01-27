'use strict';

//data types
//string,number,boolean,null,undefined,object

let myString = `hello`;
let myNumber = 20;
let myBool = true;

let myObj = { name: "kiera", key: "value", year: 2021, classroom: [] };

console.log(myObj);

let bool1 = true; //1
let bool2 = false; //0

//check if bool1 is equal to bool2
console.log(bool1 == bool2); //false
console.log(1 == true); //true - == only checks the value

console.log(1 === true); //fasle - === checks the value and the type

let myAge = null;
let mydob;

console.log(myAge == mydob); //true - undefined and null both have a falsey value
console.log(myAge === mydob); //false - different types

let ki = "kiera";

console.log(typeof ki);
console.log(typeof true);
console.log(ki !== true); //true - checking value and type
console.log(ki != true); //true - checking value
console.log("" == 0); //true becasue they are both falsey values
console.log("" === 0); //false becasue they are not the same type
