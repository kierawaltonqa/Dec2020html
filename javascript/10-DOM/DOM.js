`use strict`;
const MONKEY = document.querySelector("#cutie");
console.dir(MONKEY); //see what keys i have access to

MONKEY.title = "Cheeky Monkey"; //directly accessing key and giving it new value
MONKEY.setAttribute("width", "200px"); //specify key followed by value using set attribute method
MONKEY.setAttribute("height", "150px");
//use setAttribute() where poss instead of directly accessing the object

//select the DIV element?
let divs = document.querySelector(".addToMe");
let allP = document.querySelectorAll("div.addToMe p");
console.log(allP);

//create new content
let newHeading = document.createElement("h1");
let theText = document.createTextNode("we love JS");
newHeading.appendChild(theText);

for (let each of allP) {
    each.style.backgroundColor = "red";
}

divs.appendChild(newHeading);
