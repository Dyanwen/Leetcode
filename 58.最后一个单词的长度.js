/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arr = s.trim().split(' '), l = arr.length;
    if (arr[l - 1]) {
        return arr[l - 1].length;
    } else {
        return 0;
    }
};

// @lc code=end

