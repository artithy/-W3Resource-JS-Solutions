function capitalizeEachWord(str) {
    let words = str.split(" ");
    for (let i = 0; i < words.length; i++) {
        let firstLetter = words[i][0].toUpperCase();
        let rest = words[i].slice(1);
        words[i] = firstLetter + rest;
    }
    return words.join(" ");
}

console.log(capitalizeEachWord("hello world"));  
console.log(capitalizeEachWord("everything is fine"));  
