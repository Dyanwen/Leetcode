/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let r = 0;
    for (const i of s) {
        switch (i) {
            case 'I':
                r += 1;
                break;
            case 'V':
                r += 5;
                break;
            case 'X':
                r += 10;
                break;
            case 'L':
                r += 50;
                break;
            case 'C':
                r += 100;
                break;
            case 'D':
                r += 500;
                break;
            case 'M':
                r += 1000;
                break;
            default:
                break;
        }
    }
    if (s.includes('IV') || s.includes('IX')) r -= 2;
    if (s.includes('XL') || s.includes('XC')) r -= 20;
    if (s.includes('CD') || s.includes('CM')) r -= 200;

    return r;
};
romanToInt('III');
// @lc code=end

