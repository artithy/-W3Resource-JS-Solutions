function insertDashes(num) {
    let result = '';


    for (let i = 0; i < num.length; i++) {
        result += num[i];


        if (num[i] % 2 === 0 && i !== num.length - 1) {
            result += '-';
        }
    }

    return result;
}

let input = '121416';
let output = insertDashes(input);
console.log(output); 
