function sumOfNumsWithinARange(nums, start, end) {
    var count = 0;
    nums.forEach(element => {
        if (element >= start && element <= end) {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;