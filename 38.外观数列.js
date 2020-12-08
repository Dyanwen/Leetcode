/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let prev = '1'
    for (let i = 1; i < n; i++) {
        prev = prev.replace(/(\d)\1*/g, item => `${item.length}${item[0]}`)
    }
    return prev;

    // if (n == 1) {
    //     return '1';
    // }
    // var str = '1';
    // var sum = '1';
    // for (let i = 0; i < n; i++) {
    //     var sum = '';
    //     for (let j = 0; j < str.length; j++) {
    //         var num = 1;
    //         for (let k = 0; k < str.length; k++) {
    //             if (str[k + 1] && str[k + 1] == str[j]) {
    //                 nums += 1;
    //             } else {
    //                 break;
    //             }

    //         }
    //         if (num) {
    //             sum += `${num}${str[j]}`;
    //             j += num - 1
    //         } else {
    //             sum += `1${str[j]}`
    //         }
    //     }

    // }
};
// @lc code=end

