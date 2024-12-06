from collections import Counter

class Solution:
    def isValid(self, s: str) -> bool:
        list = []
        for _ in s:
            list.append(_)
        size = len(list)
        try:
            for i in range(size):
                if (list[i] == '('):
                    if(list[i+1] != ')' and list[size-i-1] != ')'):
                        return False
                if (list[i] == '{'):
                    if(list[i+1] != '}' and list[size-i-1] != '}'):
                        return False
                if (list[i] == '['):
                    if(list[i+1] != ']' and list[size-i-1] != ']'):
                        return False
        except:
            return False
        
        return True
                
    


tmp = Solution()
print(tmp.isValid("({)}"))

print(tmp.isValid("()[]{}"))

print(tmp.isValid("(]"))