function sumOfAllEvenNumbers(nums) {
    var count = 0;
    nums.forEach(element => {
        if (element % 2 == 0) {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;