function sumOfAllOddNumbers(nums) {
    var count = 0;
    nums.forEach(element => {
        if (element % 2 == 1) {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;