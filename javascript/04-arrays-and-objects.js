`use strict`;

// Array = collection of objects
// stores same values, arraylists, fixed sides, mutable

//4 ways to create an array in JS
let array = Array(); //accessing array constructor
let arrayWithSize = Array(10); //specifying the size
let arrayWithValues = Array("Tom", "Dick", "Harry"); //populate array w values
let shortHand = [1, 2, 3]; //square brackets ... USE THIS CONVENTION

//arrays in JS can be accessed at any time in any index - if it doesn't contain 
//a value, it will return undefined

//arrays can be sparsely filled, any unassigned parts of an array are undefined

let classroom = [];
classroom[0] = "Kiera";
console.log(classroom);
console.log(classroom[2]); //undefined - trying to access something that doesn't exist
classroom[2] = "Bob";
console.log(classroom[2]);
console.log(classroom); //[kiera,undefined(empty),bob]

//you are not confined to the type that you can put inside an array
classroom[1] = { fname: "someone", grade: 12, year: 2021 };
console.log(classroom);

classroom[3] = { fname: "someone else", grade: 12, year: 2021, subjects: ["maths", "english", "science"] };
console.log(classroom);

//arrays can be resized at any time
let students = Array(10);
students[11] = "hello";
console.log(students.length);

//methods
let fruits = ["banana", "strawberry", "melon"];
console.log(fruits);

//push() = adds to the end of an array
fruits.push("apple");
console.log(fruits);

//pop() = removes from the end of an array
fruits.pop();
console.log(fruits);

//unshift() = adds to start of an array
fruits.unshift("apple");
console.log(fruits);

//shift() = removes from the start
fruits.shift();
console.log(fruits);

//remove something in the middle of an array - splice method

for (let each of fruits) {
    console.log(each);
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let student of classroom) {
    console.log(student);
}