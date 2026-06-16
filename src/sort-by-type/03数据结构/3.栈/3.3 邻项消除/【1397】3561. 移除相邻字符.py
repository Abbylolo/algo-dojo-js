''' 法一： 栈 '''
# 判断是否相邻字母
def is_consecutive(x: str, y: str) -> bool:
    d = abs(ord(x) - ord(y))
    return d in (1, 25)

class Solution:
    def resultingString(self, s: str) -> str:
        res = []
        i = 0
        for c in s:
            if len(res) > 0 and is_consecutive(res[len(res) - 1], s[i]):
                res.pop()
            else:
                res.append(s[i])
            i += 1
        return ''.join(res)
    
print(Solution().resultingString("zadb")) # "db"



''' 法二： 更快的写法 '''
# "a" -> "zb", "b" -> "ac", "c" -> "bd", ..., "z" -> "ya"
from string import ascii_lowercase
lc = ascii_lowercase

class Solution:
    mp = {c: lc[i - 1] + lc[(i + 1) % 26] for i, c in enumerate(lc)}

    def resultingString(self, s: str) -> str:
        st = []
        for c in s:
            if st and st[-1] in self.mp[c]:
                st.pop()
            else:
                st.append(c)
        return ''.join(st)


print(Solution().resultingString("zadb")) # "db"
