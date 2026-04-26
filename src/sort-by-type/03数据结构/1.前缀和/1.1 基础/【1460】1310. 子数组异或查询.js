/**
 * @description 1310. 子数组异或查询 
 * @link https://leetcode.cn/problems/xor-queries-of-a-subarray/description/
 * 有一个正整数数组 arr，现给你一个对应的查询数组 queries，其中 queries[i] = [Li, Ri]。
 * 对于每个查询 i，请你计算从 Li 到 Ri 的 XOR 值（即 arr[Li] xor arr[Li+1] xor ... xor arr[Ri]）作为本次查询的结果。
 * 并返回一个包含给定查询 queries 所有结果的数组。
 */
/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
// 异或规律：m^m=0, 0^m=m => [li,ri]=([0,li-1]^[li,ri])^[0,li-1]=xors(ri+1)^xors(li)
var xorQueries = function (arr, queries) {
    const xors = Array(arr.length + 1), ans = []
    xors[0] = 0 // 前i个数的异或值
    for (let i = 0; i < arr.length; i++) {
        xors[i + 1] = xors[i] ^ arr[i]
    }
    for (let i = 0; i < queries.length; i++) {
        ans.push(xors[queries[i][1] + 1] ^ xors[queries[i][0]])
    }
    return ans
};

// TEST
console.log(xorQueries([1, 3, 4, 8], [[0, 1], [1, 2], [0, 3], [3, 3]])) // [2,7,14,8] 