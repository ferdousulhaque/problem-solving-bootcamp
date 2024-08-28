#import ;

def isValidParenthesis(str: str) -> bool:
    parenthesis_map = {
        ')' : '(',
        '}': '{',
        ']': '['
        }
    stack = []
    
    for char in str:
        if char in parenthesis_map.values():
            stack.append(char)
        elif char in parenthesis_map.keys():
            if(stack == [] or parenthesis_map[char] != stack.pop()):
                return False

    return stack == []


# Case 01 - Expect True
print(isValidParenthesis("({[([])]})"))

# Case 02 - Expect False
print(isValidParenthesis("({[([])})"))

