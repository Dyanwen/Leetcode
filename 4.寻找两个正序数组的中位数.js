/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// var findMedianSortedArrays = function (nums1, nums2) {
//     let arr = [...nums1, ...nums2];
//     //进行升序排序
//     let res_arr = arr.sort((a, b) => { return a - b });
//     return res_arr.length % 2 == 0 ? (arr[arr_length / 2] + arr[(arr_length / 2 - 1)]) / 2 : arr[parseInt(arr_length / 2)]
// };
var findMedianSortedArrays = function (nums1, nums2) {
    //定义一个求中位数的函数
    function cal_middle_value(arr) {
        let arr_length = arr.length;
        return (arr_length % 2 == 0 ? (arr[arr_length / 2] + arr[(arr_length / 2 - 1)]) / 2 : arr[parseInt(arr_length / 2)]);
    }
    let nums1_length = nums1.length;
    let nums2_length = nums2.length;
    //当nums1为空时
    if (!nums1_length) {
        return cal_middle_value(nums2);
    }
    //当nums2为空时
    if (!nums2_length) {
        return cal_middle_value(nums1);
    }
    //当两者都不为空时
    if (nums1_length && nums2_length) {
        let res_arr = [];
        let i = 0;
        let j = 0;
        //当某个数组中的元素全都比较完后退出循环
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                res_arr.push(nums1[i]);
                i++;
            } else {
                res_arr.push(nums2[j]);
                j++;
            }
        }
        //判断哪个数组有剩余元素，将剩余元素添加到res_str中
        res_arr = nums1[i] ? res_arr.concat(nums1.slice(i)) : res_arr;
        res_arr = nums2[j] ? res_arr.concat(nums2.slice(j)) : res_arr;
        //最后计算中位数
        return cal_middle_value(res_arr);
    }
};
// @lc code=end

