function minDeletion(nums: number[]): number {
    let cnt = 0
    const tmp: number[] = []
    for (let i = 0; i < nums.length; i++) {
        tmp.push(nums[i])
        if (tmp.length > 1 && tmp.length % 2 === 0 && nums[i] === tmp[tmp.length - 2]) {
            tmp.pop()
            cnt++
        }
    }
    return tmp.length % 2 === 0 ? cnt : cnt + 1
}

// 测试
console.log(minDeletion([1, 1, 2, 3, 5])) // 1

export { }
