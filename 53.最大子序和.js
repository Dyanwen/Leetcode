/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxSubArray = function (nums) {
//     var max = -Number.MAX_VALUE;
//     var sum = 0;
//     for (const num of nums) {
//         if (sum < 0) {
//             sum = 0
//         }
//         sum += num;
//         max = Math.max(max, sum);
//     }
//     return max;
// };

var maxSubArray = function (nums) {
    return divide(nums, 0, nums.length - 1);
};

var divide = function (nums, l, r) {
    if (l === r) {
        return nums[l];
    }
    if (l === r - 1) {
        return Math.max(nums[l], Math.max(nums[r], nums[l] + nums[r]));
    }

    let mid = parseInt((l + r) / 2);
    let lmax = divide(nums, l, mid - 1);
    let rmax = divide(nums, mid + 1, r);

    let mmax = nums[mid];  // 从中间开始计算
    let sum = mmax; // 用来求和
    for (let i = mid - 1; i >= l; i--) {
        sum += nums[i];
        mmax = Math.max(mmax, sum);
    }

    sum = mmax;
    for (let i = mid + 1; i <= r; i++) {
        sum += nums[i];
        mmax = Math.max(mmax, sum);
    }

    return Math.max(lmax, Math.max(rmax, mmax));
}
// @lc code=end

