function checkExceedingWord(word) {

    const limit = 5;


    if (word.length > limit) {
        return "Exceeding word";
    } else {
        return "Not exceeding word";
    }
}


let word1 = "Elephant";


console.log(checkExceedingWord(word1));

