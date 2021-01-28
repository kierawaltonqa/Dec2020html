//`use strict`;

function myFunction() {
    let x = false;
    if (x == false) {
        let y = "abc";
    }
    console.log(x); //false
    console.log(y); //reference error
}


myFunction();
