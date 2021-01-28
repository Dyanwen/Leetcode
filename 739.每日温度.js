/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [];
    for (let i = 0; i < T.length; i++) {
        for (let j = i; j < T.length; j++) {
            if (T[j] > T[i]) {
                stack.push(j + i);
                break
            } else {
                stack.push(0);
            }
        }
    }
    return stack;
};

dailyTemperatures([23, 25, 21, 19, 22, 26, 23]);

// @lc code=end

