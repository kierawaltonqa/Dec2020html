`use strict`;
let colours = ['red', 'green', 'blue', 'orange', 'lime', 'olive', 'black', 'yellow'];
console.log(colours);

const placeholder = document.querySelector("#placeholder")

const buildP = () => {
    const elementp = document.createElement("p");
    const text = document.createTextNode("the text");
    elementp.appendChild(text);
    placeholder.appendChild(elementp);
}
buildP();

const printcolours = () => {
    for (let colour of colours) {
        console.log(colour);
    }
}
printcolours();

