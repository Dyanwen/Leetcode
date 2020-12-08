/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var res = 0, str = '', len = s.length;
    for (let i = 0; i < len; i++) {
        var char = s.charAt(i);
        var index = str.indexOf(char);
        if (index === -1) {
            str += char;
            res = res < str.length ? str.length : res;
        } else {
            str = str.substr(index + 1) + char;
        }
    }
    return res;
};

// @lc code=end

