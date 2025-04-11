const prompt = require("prompt-sync")();

let input = prompt("Enter a string:");
let vowelCount = 0;

input = input.toLowerCase();

for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        vowelCount++;
    }
}

console.log("Number of vowels in the string: " + vowelCount);
