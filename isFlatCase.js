function isFlatCase(text) {

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char < 'a' || char > 'z') {
            return false;
        }
    }

    return true;
}

console.log(isFlatCase("hello world"));