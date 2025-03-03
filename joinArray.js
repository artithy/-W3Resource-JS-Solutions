let array = ['apple', 'banana', 'cherry', 'date'];
let result = '';


for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
        result += array[i];
    } else {
        result += array[i] + ', ';
    }
}

console.log(result);
