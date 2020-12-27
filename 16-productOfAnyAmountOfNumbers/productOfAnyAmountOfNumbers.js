function productOfAnyAmountOfNumbers(...args) {
    var sum = 0;
    for (let i of args) {
        if (sum == 0) {
            sum = i;
        } else {
            sum *= i;
        }
    }
    return sum;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;