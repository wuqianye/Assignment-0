function countOfAllNumbersSmallerThanTarget(nums, target) {
    var count = 0;
    nums.forEach(element => {
        if (element < target) {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;