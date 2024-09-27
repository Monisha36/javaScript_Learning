function multiplyArray(arr) {
    return arr.reduce((product, currentValue) => product * currentValue, 1);
}

const numbers = [2, 5, 3];
console.log(multiplyArray(numbers));