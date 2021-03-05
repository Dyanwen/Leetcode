/*
 * @lc app=leetcode.cn id=239 lang=javascript
 *
 * [239] 滑动窗口最大值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    if (!nums) {
        return []
    }
    let n = [], r = [];
    for (let i = 0; i < nums.length; i++) {
        if (i >= k && n[0] <= i - k) {
            n.shift()
        }
        while (n && nums[n[n.length - 1]] <= nums[i]) {
            n.pop();
        }
        n.push(i)
        if (i >= k - 1) {
            r.push(nums[n[0]])
        }
    }
    return r;
};
// @lc code=end

