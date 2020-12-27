function fizzBuzz(start, end) {
    var arr = [];
    var num = start;
    for (var i = 0; i <= end-start; i++) {
        if (num % 3 == 0 && num % 5 == 0) {
            arr[i] = "FizzBuzz";
        } else if (num % 3 == 0) {
            arr[i] = "Fizz";
        } else if (num % 5 == 0) {
            arr[i] = "Buzz";
        } else {
            arr[i] = num;
        }
        num++;
    }
    return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;