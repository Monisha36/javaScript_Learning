function promiseSum(a, b) {
    return new Promise((resolve, reject) => {
        if (a > 0 && b > 0) {
            resolve(a + b); 
        } else {
            reject(new Error("Both numbers must be positive")); 
        }
    });
}


promiseSum(3, 4)
    .then(sum => {
        console.log("Sum:", sum); 
    })
    .catch(error => {
        console.error(error.message);
    });

promiseSum(-1, 5)
    .then(sum => {
        console.log("Sum:", sum);
    })
    .catch(error => {
        console.error(error.message);
    });
