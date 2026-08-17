class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        max_len = 0
        seen: dict[int, int] = {}
        slow: int = 0

        for i in range(len(s)):
            if not s[i] in seen:
                seen[s[i]] = 1
            else:
                seen[s[i]] += 1
            
            if i != 0:
                while seen[s[i]] > 1:
                    seen[s[slow]] -= 1
                    slow += 1
            
            max_len = max(max_len, i - slow + 1)

        return max_len

