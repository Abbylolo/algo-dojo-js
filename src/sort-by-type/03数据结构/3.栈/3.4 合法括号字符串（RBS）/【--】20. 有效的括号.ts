function isValid(s: string): boolean {
    if (s.length % 2 !== 0) {
        return false
    }
    const pairs: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    const stack: string[] = []
    for (const c of s) {
        if (c in pairs) {
            if (!stack.length || stack[stack.length - 1] !== pairs[c]) {
                return false
            }
            stack.pop()
        } else {
            stack.push(c)
        }
    }
    return stack.length === 0
}

export { }
