function isPalindrome(word) {
    var length = word.length -1;
    var halfLength = Math.ceil(length / 2);
    for (var i = 0; i < halfLength; i++) {
        if (word[i] != word[length - i]) {
            return false;
        }
    }
    return true;
}

// Do not edit this line;
module.exports = isPalindrome;