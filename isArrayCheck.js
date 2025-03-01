let input = [1, 2, 3]; 

let isArray = true;

if (typeof input !== "object" || input === null) {
    console.log("This is not an array");
    isArray = false;
} 
else {
    for (let i = 0; i < input.length; i++) {
        if (input[i] === undefined) {
            isArray = false;
            break;
        }
    }
    if (isArray) {
        console.log("This is an array");
    }
}
