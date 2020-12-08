/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var s, e, f;
    nums.some((o, i) => {
        f = target - o;
        if (nums.includes(f) && nums.indexOf(f) != i) {
            s = i;
            e = nums.indexOf(f);
            return true;
        }
    })
    return [s, e];
};
let nums = [2, 7, 11, 15],
    target = 9;
console.log(twoSum(nums, target));
// @lc code=end