# relevant questions:
# - how many solutions are present in the riddle?

# T -> O(n) and S -> O(1)

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    nums = kwargs['nums']
    target = kwargs['target']
    # Write solution here
    # Using 2 pointer
    i,j = 0, len(nums)-1
    total = 0
    while(i<j):
        total = nums[i] + nums[j]
        if (total < target):
            i = i+1
        elif total > target:
            j = j-1
        else:
            return [i+1, j+1]
    
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
        print(case['input'])
        if case['input'] == case['expected']:
            print("Case: PASS")
        else:
            print("Case: FAIL")

tests(cases)