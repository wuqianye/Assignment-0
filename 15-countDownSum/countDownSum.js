class MySolution {
    countDownSum(num) {
        if (num > 1) {
            var sum = this.countDownSum(num-1);
            return sum + num;
        } else {
            return 1;
        }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;