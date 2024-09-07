# relevant questions:
# - What about an empty string? Is it a valid palindrome?
# - How many gaps may apprear

# T -> O(n) and S -> O(1)

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    msg = kwargs['msg']
    # Write solution here
    

    return True


## Reserved for Test Cases
cases = [
    {
        "input": code(msg = "A man, a plan, a canal: Panama"),
        "expected": True
    },
    {
        "input": code(msg = "race a car"),
        "expected": False
    },
    {
        "input": code(msg = ""),
        "expected": True
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