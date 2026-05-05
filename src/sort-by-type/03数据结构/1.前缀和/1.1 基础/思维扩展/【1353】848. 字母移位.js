/**
 * @description 848. 字母移位
 * @link https://leetcode.cn/problems/shifting-letters/description/
 * 有一个由小写字母组成的字符串 s，和一个长度相同的整数数组 shifts。
 * 我们将字母表中的下一个字母称为原字母的 移位 shift() （由于字母表是环绕的， 'z' 将会变成 'a'）。
 * 例如，shift('a') = 'b', shift('t') = 'u', 以及 shift('z') = 'a'。
 * 对于每个 shifts[i] = x ， 我们会将 s 中的前 i + 1 个字母移位 x 次。
 * 返回 将所有这些移位都应用到 s 后最终得到的字符串 。
 */
/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
// 思路：计算每个字母位移总和。列出计算公式就能找到规律
var shiftingLetters = function (s, shifts) {
    const n = shifts.length;
    const ans = new Array(n);
    let totalShift = 0;
    const base = 'a'.charCodeAt(0);

    // 从后往前遍历，维护后缀和（即每个位置最终需要的总移位数）
    for (let i = n - 1; i >= 0; i--) {
        totalShift = (totalShift + shifts[i]) % 26;
        const newCode = (s.charCodeAt(i) - base + totalShift) % 26;
        ans[i] = String.fromCharCode(base + newCode);
    }

    return ans.join('');
};

// TEST
console.log(shiftingLetters('abc', [3, 5, 9])) // 'rpl'