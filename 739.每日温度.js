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
    let stack = [],
        riseArray = new Array(T.length).fill(0);

    for (let i = 0; i < T.length; i++) {
        stack.push(T[i])
        if (T[i + 1] > T[i]) {
            riseArray[i] += 1;
            stack.pop(T(i))
        }
    }
};

// @lc code=end

