function setUnionOfAnyAmountOfSets(...args) {
    var mySet = new Set();
    for (let set of args) {
        for (let num of set) {
            if (!(mySet.has(num))) {
                mySet.add(num);
            }
        }
    }
    return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;