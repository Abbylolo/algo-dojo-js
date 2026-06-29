class Solution:
    def mergeAdjacent(self, nums: List[int]) -> List[int]:
        res = []
        for i in nums:
            res.append(i)
            while(len(res) > 1 and res[-1] == res[-2]):
                res.pop()
                res[-1] = res[-1] * 2
        return res    

# 测试
nums = [1,2,3,4,5]
print(Solution().mergeAdjacent(nums))
