function countOfAllBooleans(arr) {
    var count = 0;
    arr.forEach(element => {
        if (element === true || element === false) {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleans;