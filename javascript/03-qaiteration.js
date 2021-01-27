`use strict`;
let A = 100;
while (A <= 200) {
    A++;
    console.log(`A=${A}`);
}

let b = 100;
while (b <= 200) {
    if (b % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
    b++;
}

for (let i = 0; i <= 10; i++) {
    for (let j = 0; j <= 10; j++) {
        console.log(j)
    }
}

let age = 22;
if (age >= 18 && age <= 65) {
    console.log("age is in range");
} else if (age < 18) {
    console.log("under age!");
} else {
    console.log("catch all else")
}
//ternary if to check that age is above 50
let age2 = 100
let result = age2 >= 50 ? "age above 50" : "age below 50";
console.log(result);

//switch case
let day = "Wednesday"
switch (day) {
    case "Sunday":
        console.log(`its a sunday`);
        break;
    case "saturday":
        console.log(`its a weekday`);
        break;
    case "Wednesday":
        console.log("its wednesday")
        break;
    default:
        console.log("not a day")
        break;
}