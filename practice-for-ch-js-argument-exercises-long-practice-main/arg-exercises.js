function sum() {
    let totalSum = 0;
    for (let i = 0; i < arguments.length; i++) {
        totalSum += arguments[i];
    }
    return totalSum;
};

console.log(sum(1, 2, 3, 4))
console.log(sum(1, 2, 3, 4, 5))

function sum2(...args) {
    let totalSum = 0;
    for (let i = 0; i < args.length; i++) {
        totalSum += args[i];
    }
    return totalSum;
};

console.log(sum2(1, 2, 3, 4))
console.log(sum2(1, 2, 3, 4, 5))

function sum3() {
    let totalSum = 0;
    let args = Array.prototype.slice.call(arguments);
    args.forEach(function(num) {
        totalSum += num
    })
    return totalSum;
};

console.log(sum3(1, 2, 3, 4))
console.log(sum3(1, 2, 3, 4, 5))

