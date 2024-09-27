function findFirstNegative(arr) {
    return arr.find(number => number < 0);
}

const numbers2 = [3, 5, -2, 9, -7];
console.log(findFirstNegative(numbers2));