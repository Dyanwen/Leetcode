/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let rr = [],
        resultNum,
        intToStr = x.toString();

    for (let i = intToStr.length; i >= 0; i--) {
        rr.push(intToStr[i]);
    }
    if (intToStr[0] == '-') {
        rr.unshift("-");
    }
    resultNum = parseInt(rr.join(''));
    if (resultNum <= Math.pow(-2, 31) || resultNum >= Math.pow(2, 31) - 1) {
        return 0
    };
    return resultNum;
};

// @lc code=end

