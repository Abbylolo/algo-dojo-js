class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for c in map(ord, s):
            if c > ord('a') and (len(stack) == 0 or c - stack.pop() > 1):
                return False
            if c < ord('c'):
                stack.append(c)
        return len(stack) == 0

# TEST
print(Solution().isValid("aabcbc")) # True