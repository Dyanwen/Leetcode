/*
 * @lc app=leetcode.cn id=703 lang=javascript
 *
 * [703] 数据流中的第K大元素
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    nums.sort((a, b) => { return a - b })
    this.k = k;
    this.arr = nums.splice(-k)
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (this.arr.length < this.k) {
        this.arr.push(val)
    } else if (this.arr[0] < val) {
        this.arr.splice(0, 1, val)
    }
    this.arr.sort((a, b) => { return a - b })
    return this.arr[0];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
// @lc code=end

