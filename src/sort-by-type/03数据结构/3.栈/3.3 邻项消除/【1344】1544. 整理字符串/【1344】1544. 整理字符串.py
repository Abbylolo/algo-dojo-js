class Solution:
    def makeGood(self, s: str) -> str:
        i = 0
        ret = []
        while i < len(s):
            if len(ret) > 0 and ret[-1].swapcase() == s[i]:
                ret.pop()
            else:
                ret.append(s[i])
            i += 1
        return ''.join(ret)

s = "leEeetcode"
print(Solution().makeGood(s)) # "leetcode"