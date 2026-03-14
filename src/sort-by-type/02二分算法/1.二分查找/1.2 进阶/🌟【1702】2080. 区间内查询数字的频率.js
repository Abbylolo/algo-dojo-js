/**
 * @description 2080. 区间内查询数字的频率
 * @link https://leetcode.cn/problems/range-frequency-queries/description/
 * 请你设计一个数据结构，它能求出给定子数组内一个给定值的 频率 。
 * 子数组中一个值的 频率 指的是这个子数组中这个值的出现次数。
 * 请你实现 RangeFreqQuery 类：
 * RangeFreqQuery(int[] arr) 用下标从 0 开始的整数数组 arr 构造一个类的实例。
 * int query(int left, int right, int value) 返回子数组 arr[left...right] 中 value 的 频率 。
 * 一个 子数组 指的是数组中一段连续的元素。arr[left...right] 指的是 nums 中包含下标 left 和 right 在内 的中间一段连续元素。
 */

/**
 * 思路：
 * 给一个数组可以构造，定义了方法：求区间范围[left, right]内某元素出现次数
 *  ==》1、数组构造：记录每个元素的出现下标（🌟）
 *  == 2、数组是有序的，在有序数组中查找[l,r]元素个数=〉lb（r+1）-lb(l)
 */
const _ = require('lodash');

/**
 * @param {number[]} arr
 */
var RangeFreqQuery = function (arr) {
    this.pos = {}
    arr.forEach((v, index) => {
        if (this.pos[v] === undefined) {
            this.pos[v] = []
        }
        this.pos[v].push(index)
    })

};

/** 
 * @param {number} left 
 * @param {number} right 
 * @param {number} value
 * @return {number}
 */
RangeFreqQuery.prototype.query = function (left, right, value) {
    const indices = this.pos[value]
    if (indices === undefined) return 0
    return _.sortedIndex(indices, right + 1) - _.sortedIndex(indices, left)
};

/** 
 * Your RangeFreqQuery object will be instantiated and called as such:
 * var obj = new RangeFreqQuery(arr)
 * var param_1 = obj.query(left,right,value)
 */

// TEST
console.log(new RangeFreqQuery([12, 33, 4, 56, 22, 2, 34, 33, 22, 12, 34, 56]).query(1, 2, 4));
