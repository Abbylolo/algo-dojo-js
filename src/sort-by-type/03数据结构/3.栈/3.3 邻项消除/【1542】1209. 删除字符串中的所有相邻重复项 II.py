class Solution:
    def removeDuplicates(self, s: str, k: int) -> str:
        
        st = [] # 存每个字符，及连续出现的次数
        for c in s:
            if st and st[-1][0] == c:
                st[-1][1] += 1
                if st[-1][1] == k:
                    st.pop()
            else:
                st.append([c, 1])
        return "".join([x[0]*x[1] for x in st])