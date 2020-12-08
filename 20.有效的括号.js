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
var isValid = function (s) {
    let m = new Map(), a = s.split(''), t = [], b = true;
    m.set('(', ')');
    m.set('[', ']');
    m.set('{', '}');

    for (let i = 0; i < a.length; i++) {
        if (a[i] == '(' || a[i] == '[' || a[i] == '{') {
            t.push(a[i]);
        }
        if (a[i] == ')' || a[i] == ']' || a[i] == '}') {
            if (m.get(t[t.length - 1]) == a[i]) {
                t.pop();
                console.log(t);
            } else {
                b = false;
                break;
            }
        }
    }
    t.length && (b = false);
    return b;

};
// @lc code=end

