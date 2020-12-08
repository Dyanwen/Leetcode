/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let a, b=[];
    if (x < 0) return false;
    a = x.toString().split('');
    for (let i = a.length; i >= 0; i--) {
        b.push(a[i]);
    }
    b = b.join('');
    if (x == b) {
        return true
    } else {
        return false;
    }
};
isPalindrome(123);

// @lc code=end

