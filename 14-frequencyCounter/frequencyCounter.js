function frequencyCounter(word) {
    var counter = {};
    var characters = word.split("");
    characters.forEach(element => {
        if (!(element in counter)){
            counter[element] = 1;
        } else {
            counter[element]++;
        }
    });
    return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;