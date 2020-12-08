/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let result = '', firstStrs = strs[0];
    if (!strs.length) return result;
    for (let i = 0; i < firstStrs.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (firstStrs[i] !== strs[j][i]) {
                return result;
            }
        }

        result += firstStrs[i];
    }
    return result;
};
// @lc code=end

