# Remove the duplicates in the array without using extra array.
# Optimizing Space Complexity

# T ->  and S -> O(1)

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    arr = kwargs['arr']
    return [1,2,3]


## Reserved for Test Cases
cases = [
    {
        "input": code(arr=[1,1,2,2,2,3,3]),
        "expected": [1,2,3]
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