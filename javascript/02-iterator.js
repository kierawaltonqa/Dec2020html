`use strict`;

//iterator

let x = 1;
console.log(x++); //1 - because it hasn't iterated yet, value of x is printed and then the ++ increments it
console.log(x); //2

let y = 1;
console.log(++y); //2 - first increment the value and then print the value of y
console.log(y); //2

//ASI - automatic semicolon insertion
//1. adds a semi-colon when 2 lines are separated by an enter key
//2. when 2 statements are separated by a colsing brace }
//3. line terminator followed by a break, continue, return / throws
let greeting = "hello friends"
console.log(greeting)

let foo
bar;

//interpreted as let foo;bar;

console.log(foo);
console.log(bar);

let a
b
    = 3 //assumes the = is probably attached to the b
console.log(a);//undefined
console.log(b);//3
//interpreted as let a,b=3;

return
2 * b + 1

/* interpreted as:
return;
2*b+1;
*/

