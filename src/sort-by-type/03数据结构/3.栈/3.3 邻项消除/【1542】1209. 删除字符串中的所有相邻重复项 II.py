class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        cnt = [] # 存每个字符，及连续出现的次数
        for c in s:
            if cnt and cnt[-1][0] == c:
                cnt[-1][1] += 1
                if cnt[-1][1] == k:
                    cnt.pop()
            else:
                cnt.append([c, 1])
        return ''.join(item[0] * item[1] for item in cnt)
