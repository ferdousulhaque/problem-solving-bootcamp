# relevant questions:
# - how many solutions are present in the riddle?

# T -> O(nlogn) and S -> O(1)

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    nums = kwargs['nums']
    target = kwargs['target']
    # Write solution here
    # binary search
    
    raise Exception("No solution found")


## Reserved for Test Cases
cases = [
    {
        "input": code(nums=[1,6,7,9,11,16], target=12),
        "expected": [1,5]
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