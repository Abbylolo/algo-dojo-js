/**
 * 求非递减数组中第一个大于等于 target 的元素索引
 * 解题关键：
 * 1.循环不变量
 * 2.区间内的数（下标）都是还未确定与 target 的大小关系的
 */

// 一、左闭右闭区间[left, right]
// 循环不变量：[left, right]区间内都是未确定的数，right+1及右边是确定满足>=target条件的
let lowerBound = function (nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) { // 区间不为空
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) { // 说明mid及左部分都不满足，下一轮搜索区间是右部分 [mid + 1, right]
            left = mid + 1
        } else { // 说明mid及右部分都满足，下一轮搜索区间是左部分 [left, mid - 1]
            right = mid - 1
        }
    }
    return left // 即right + 1，也等于left(因为最终退出循环left>right)
}

// 二、左闭右开区间[left, right)
// 循环不变量：[left, right)区间内都是未确定的数，right及右边是确定满足条件的
let lowerBound2 = function (nums, target) {
    let left = 0, right = nums.length
    while (left < right) { // 保证区间有数
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) { // mid及左边不满足，去右边找[mid+1, right)
            left = mid + 1
        } else { // mid及右边满足，去左边找[left, mid)
            right = mid // 因为右边是开区间，所以设为mid是不取到mid的
        }
    }
    return right // 即left(最终退出循环时left=right)
}

// 三、左开右开区间(left, right)
// 循环不变量：(left, right)区间内都是未确定的数，right及右边是确定满足条件的
let lowerBound3 = function (nums, target) {
    let left = -1, right = nums.length
    while (right - left > 1) { // 保证区间有数
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < target) { // mid及左部分不满足，右边找(mid, right)
            left = mid // 因为左边是开区间，所以设为mid是不取到mid的
        } else { // mid及以右满足，左边找(left, mid)
            right = mid
        }
    }
    return right
}


// TEST
console.log(lowerBound([1, 2, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // 1
console.log(lowerBound2([1, 2, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // 1
console.log(lowerBound3([1, 2, 2, 3, 4, 5, 6, 7, 8, 9], 2)); // 1
