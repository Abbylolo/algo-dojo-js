function removeDuplicates(s: string, k: number): string {
    const res: [string, number][] = [] // 存每个字符，及连续出现的次数
    for (let i = 0; i < s.length; i++) {
        const n = res.length
        if (n && s[i] === res[n - 1][0]) {
            res[n - 1][1]++
            if (res[n - 1][1] === k) {
                res.pop()
            }
        } else {
            res.push([s[i], 1])
        }
    }
    return res.map(([c, k]) => c.repeat(k)).join('')
}

// TEST
console.log(removeDuplicates("deeedbbcccbdaa", 3)) // "aa"

export { }