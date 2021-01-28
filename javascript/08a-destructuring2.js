let user = {
    fname: "John",
    years: 30
};

// your code to the left side:
// ... = user
let { fname, years: age, isAdmin = false } = user
console.log(fname); // John
console.log(age); // 30
console.log(isAdmin); // false

// const rgb = [200];
// const [red = 255, green, blue = 255] = rgb;
// console.log(`R: ${red}, G: ${green}, B: ${blue}`);

let red = 100;
let green = 200;
let blue = 50;
const rgb = [200, 255, 100];
[red, green] = rgb;
console.log(`R: ${red}, G: ${green}, B: ${blue}`);
//output: R: 200, G: 255, B: 50

const student = {
    name: 'John Doe',
    age: 16,
    scores: { maths: 74, english: 63 }
};
const { name, scores: { maths, science = 50 } } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Science.`);