/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target);
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > target) return i;
            if (i == nums.length - 1 && nums[i] < target) return nums.length;
        }
    }
};
// @lc code=end

