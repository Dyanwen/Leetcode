/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 执行时间 296s
// var isValid = function (s) {
//     let m = new Map(), a = s.split(''), t = [], b = true;
//     m.set('(', ')');
//     m.set('[', ']');
//     m.set('{', '}');

//     for (let i = 0; i < a.length; i++) {
//         if (a[i] == '(' || a[i] == '[' || a[i] == '{') {
//             t.push(a[i]);
//         }
//         if (a[i] == ')' || a[i] == ']' || a[i] == '}') {
//             if (m.get(t[t.length - 1]) == a[i]) {
//                 t.pop();
//                 console.log(t);
//             } else {
//                 b = false;
//                 break;
//             }
//         }
//     }
//     t.length && (b = false);
//     return b;
// };


// 执行时间 84s
// var isValid = function (s) {
//     let a = s.split(''), t = [], b = true,
//         o = { '(': -1, ')': 1, '[': -2, ']': 2, '{': -3, '}': 3 };

//     for (let i = 0; i < a.length; i++) {
//         if (o[a[i]] < 0) {
//             t.push(a[i]);
//         }
//         if (o[a[i]] > 0) {
//             if (o[a[i]] + o[t[t.length - 1]] == 0) {
//                 t.pop()
//             } else {
//                 b = false;
//                 break
//             }
//         }
//     }
//     t.length && (b = false)
//     return b;
// };

// 执行时间 88s
// var isValid = function (s) {
//     let a = s.split(''), t = [],
//         o = { ')': '(', ']': '[', '}': '{' };

//     for (let i = 0; i < a.length; i++) {
//         if (!o[a[i]]) {
//             t.push(a[i])
//             continue
//         }
//         if (t.pop() !== o[a[i]]) {
//             return false;
//         }
//     }
//     return !t.length;
// };

var isValid = function (s) {
    let t = 0;

    do {
        t = s.length;
        s = s.replace('()','').replace('[]','').replace('{}','')
    }while(t != s.length)
    return !s.length;
};

// @lc code=end

