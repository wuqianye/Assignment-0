function countOfAllBooleansAndStrings(arr) {
    var count = 0;
    arr.forEach(element => {
        if (typeof(element) == "boolean" || typeof(element) == "string") {
            count++;
        }
    });
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;