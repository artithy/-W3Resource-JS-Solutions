const prompt = require("prompt-sync")();

let sentence = prompt("Enter a sentence: ");
let small = sentence.toLowerCase();
let letters = new Set();

for (let i = 0; i < small.length; i++) {
    let char = small[i];
    if (char >= 'a' && char <= 'z') {
        letters.add(char);
    }
}

if (letters.size === 26) {
    console.log("It's a pangram!");
} else {
    console.log("Not a pangram.");
}
