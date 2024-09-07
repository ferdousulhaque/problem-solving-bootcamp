# relevant questions:
# - Should I consider only lower case a-z and ASCII only?
# - is there any repeating characters?
# - 

# T -> O(n) and S -> O(1)

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    msg = kwargs['msg']
    # Write solution here
    char_set = set()
    left, maxl = 0, 0

    for right in range(len(msg)):
        while msg[right] in char_set:
            char_set.remove(msg[right])
            left += 1
        char_set.add(msg[right])
        maxl = max(maxl, right - left + 1)
    return maxl


## Reserved for Test Cases
cases = [
    {
        "input": code(msg = "abcabcbb"),
        "expected": 3
    },
    {
        "input": code(msg = "bbbbbb"),
        "expected": 1
    },
]

def tests(cases: list) -> None:
    # print()
    for case in cases:
        if case['input'] == case['expected']:
            print("Case: PASS")
        else:
            print("Case: FAIL")

tests(cases)