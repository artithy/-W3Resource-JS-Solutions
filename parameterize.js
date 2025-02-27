const prompt= require("prompt-sync")();

function parameterizeString(str) {
    return str.toLowerCase().split(" ").join("-");
}

// User input neowa
let userInput = prompt("Enter a string:");
let result = parameterizeString(userInput);

console.log(result);
