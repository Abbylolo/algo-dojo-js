class Solution:
    def minDeletion(self, nums: list[int]) -> int:
        n = len(nums)
        ans, even = 0, True # even - 比较窗口数组个数是否为偶数
        for i in range(n - 1):
            if even and nums[i] == nums[i + 1]:
                ans += 1
            else:
                even = not even
        # n - ans:剔除重复元素后的最终数组
        return ans if (n - ans) % 2 == 0 else ans + 1
        

# 测试
print(Solution().minDeletion([1,1,2,3,5])) # 1