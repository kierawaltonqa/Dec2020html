`use-strict`;

//container for relevant info, properties (key value pairs)

//creating objects
let student = new Object();
let person = {}; //<-- short hand

//adding properties to your object
//try to use .property where possible, but can also access/add using [] notation
person.name = "Tony Stark";
person["date of birth"] = 1965;

console.log(person);
console.log(person.name); //Tony Stark
console.log(person["date of birth"]);

let car = {};
car["make"] = "corsa";
car["colour"] = "silver";
car["engine size"] = 1;

console.log(car);

for (let attributes in car) {
    console.log(`key:${attributes} value:${car[attributes]}`);
}

let carpark = [
    car,
    { "make": "audi", "colour": "silver", "engine size": 1.4 },
    { "make": "merc", "model": "M5", "colour": "pink" }
]
console.log(carpark);

for (let cp of carpark) {
    console.log(cp);
    for (let car in cp) {
        //console.log(car); //returns the keys of the object
        //console.log(cp[car]) //returns the value
        console.log(`key:${car} value:${cp[car]}`); //key: [key] value:[value]
    }
}

//JSON = javascript object notation
//key value pair... key:value, key2:value2,

//tescos is an array that is a key inside an object
let myJSONObject = {
    "tescos": [
        { "productname": "7up", "price": 0.99, "quantity": 100 },
        { "productname": "flowers", "price": 15.99, "quantity": 200 }
    ],
    "cars": [
        { "make": "audi", "model": "A1", "colour": "silver" },
        { "make": "merc", "model": "M5", "colour": "pink" }
    ]
}
myJSONObject.tescos.push({ "productname": "nail polish remover", "price": 3.99, "quantity": 9 });

console.log(myJSONObject);

console.log(car);
let carToText = JSON.stringify(car);
console.log(typeof car);
console.log(typeof carToText);

let userData = `{"name":"kiera"}`
console.log(typeof userData);
let obj = JSON.parse(userData);
console.log(typeof obj);

//QA community exercises
let darthVader = {
    "allegiance": "empire",
    "weapon": "lightsaber",
    "sith": true
};
console.log(darthVader["allegiance"]);
console.log(darthVader["weapon"]);
console.log(darthVader["sith"]);

let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("kiera");
myArray.push("is");
myArray.push("my name");
console.log(myArray.length);
