class MySolution {
    constructor() {
        this.flag = false; // this is optional to use;
    }

    binarySearch(nums, target) {
        var mid = Math.floor((nums.length) / 2);
        if (nums[mid] == target) {
            return true;
        } else if (nums[mid] != target && nums.length == 1) {
            return false;
        } else if (nums[mid] > target) {
            var mNums = [];
            for (var i = 0; i < mid; i++) {
                mNums.push(nums[i]);
            }
            return this.binarySearch(mNums, target);
        } else if (nums[mid] < target) {
            if (nums.length - 1 == mid) {
                return false;
            }
            var mNums = [];
            for (var i = mid + 1; i < nums.length; i++) {
                mNums.push(nums[i]);
            }
            return this.binarySearch(mNums, target);
        }
    }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;