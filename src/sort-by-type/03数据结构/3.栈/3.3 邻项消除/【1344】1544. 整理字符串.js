/**
 * @description 1544. 整理字符串
 * @link https://leetcode.cn/problems/make-the-string-great/description/
 * 给你一个由大小写英文字母组成的字符串 s 。
 * 一个整理好的字符串中，两个相邻字符 s[i] 和 s[i+1]，其中 0<= i <= s.length-2 ，要满足如下条件:
 *      若 s[i] 是小写字符，则 s[i+1] 不可以是相同的大写字符。
 *      若 s[i] 是大写字符，则 s[i+1] 不可以是相同的小写字符。
 * 请你将字符串整理好，每次你都可以从字符串中选出满足上述条件的 两个相邻 字符并删除，直到字符串整理好为止。
 * 请返回整理好的 字符串 。题目保证在给出的约束条件下，测试样例对应的答案是唯一的。
 * 注意：空字符串也属于整理好的字符串，尽管其中没有任何字符。
 */
var makeGood = function (s) {
    const len = s.length;
    const ret = [];
    let i = 0;
    while (i < len) {
        if (ret.length > 0
            && ret[ret.length - 1].toLowerCase() === s.charAt(i).toLowerCase()
            && ret[ret.length - 1] !== s.charAt(i)
        ) {
            ret.pop();
        } else {
            ret.push(s.charAt(i));
        }
        i += 1;
    }
    return ret.join('');
};

// TEST
console.log(makeGood('leEeetcode')) // 'leetcode'
console.log(makeGood('abBAcC')) // ''
console.log(makeGood('s')) // 's'