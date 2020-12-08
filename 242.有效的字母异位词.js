/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// var isAnagram = function (s, t) {
//     return s.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('') === t.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
// };

// var isAnagram = function (s, t) {
//     let baseArr = 'qwertyuioplkjhgfdsazxcvbnm'.split('');
//     var m = {}
//     for (let i = 0; i < baseArr.length; i++) {
//         m[baseArr[i]] =0;
//     }
//     let sa = s.split('');
//     sa.forEach(i => {
//         m[i] += 1;
//     })

//     let ta = t.split('');
//     ta.forEach(i => {
//         m[i] -= 1;
//     })
//     for (const [key, value] of Object.entries(m)) {
//         if (value !== 0) {
//             return false
//         }
//     }
//     return true
// }

var isAnagram = function (s, t) {
    let baseArr = 'qwertyuioplkjhgfdsazxcvbnm'.split('');
    let so = {}, to = {}, sa = ta = [];
    sa = s.split('');
    ta = t.split('');
    baseArr.forEach(i => {
        to[i] = 0;
        so[i] = 0;
    }) 
    
    sa.forEach(i => {
        so[i] = so[i] + 1
    })

    ta.forEach(i => {
        to[i] = to[i] + 1;
    })
    for (const key in so) {
        if (so.hasOwnProperty(key)) {
            console.log()
            if (so[key] !== to[key]) {
                return false;
            }
        }
    }
    
    return true;

}
// @lc code=end

