/**
 * @description 71. 简化路径
 * @link https://leetcode.cn/problems/simplify-path/description/
 * 
 * 给你一个字符串 path ，表示指向某一文件或目录的 Unix 风格绝对路径（以 '/' 开头），
 * 请你将其转化为更加简洁的规范路径。
 * 
 * Unix 风格文件系统规则：
 * 1. 一个点 '.' 表示当前目录本身
 * 2. 两个点 '..' 表示切换到上一级目录（父目录）
 * 3. 任意多个连续的斜杠（如 '//' 或 '///'）都被视为单个斜杠 '/'
 * 4. 其他格式的点（如 '...' 或 '....'）均被视为有效的文件/目录名称
 * 
 * 简化路径需要遵循的格式：
 * 1. 始终以斜杠 '/' 开头
 * 2. 两个目录名之间必须只有一个斜杠 '/'
 * 3. 最后一个目录名（如果存在）不能以 '/' 结尾
 * 4. 路径仅包含从根目录到目标文件或目录的路径上的目录（不含 '.' 或 '..'）
 */

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const pArr = path.split('/')
    let ans = []
    for (const c of pArr) {
        if (c === '' || c === '.') {
            continue
        } else if (c === '..') {
            ans.length && ans.pop()
        } else {
            ans.push(c)
        }
    }
    return '/' + ans.join('/')
};

// TEST
console.log(simplifyPath('/home//foo/')) // '/home/foo'
