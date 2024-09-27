function multiplyByTwo(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] * 2);
    }
    return result;
}

console.log(multiplyByTwo([1, 2, 3, 4]));