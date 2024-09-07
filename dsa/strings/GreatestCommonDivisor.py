def gcdOfStrings(str1: str, str2: str) -> str:
    len1, len2 = len(str1), len(str2)
        
    def valid(k):
        if len1 % k or len2 % k: 
            return False
        n1, n2 = len1 // k, len2 // k
        base = str1[:k]
        print(base)
        return str1 == n1 * base and str2 == n2 * base 
    
    for i in range(min(len1, len2), 0, -1):
        if valid(i):
            return str1[:i]
    return ""


# Test Cases
cases = [
    {
        "str1": "ABCABC",
        "str2": "ABC",
        "expected": "ABC"
    },
    {
        "str1": "ABABAB",
        "str2": "ABAB",
        "expected": "AB"
    },
    {
        "str1": "ABBABB",
        "str2": "ABAB",
        "expected": "AB"
    },
    {
        "str1": "LEET",
        "str2": "CODE",
        "expected": ""
    },
    {
        "str1": "ABCDEF",
        "str2": "ABC",
        "expected": ""
    }
]

def assertion(output: str, expected: str) -> bool:
    if(output == expected):
        return True
    else:
        return False

for case in cases:
    if(assertion(
        gcdOfStrings(case['str1'], case['str2']),
        case['expected']
    )):
       print("Case: PASS")
    else:
       print("Case: FAIL")