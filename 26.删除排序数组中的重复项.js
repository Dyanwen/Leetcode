/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     while (nums[i] == nums[i + 1]) {
    //         nums.splice(i + 1, 1)
    //     }
    // }
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
};
// @lc code=end

