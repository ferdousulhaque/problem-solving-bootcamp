# relevant questions:
# - how many solutions are present in the riddle?

# T -> O(n) and S -> O(n)

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    nums = kwargs['nums']
    target = kwargs['target']
    # Write solution here
    map = {} # Store the Target-i with the index number
    for i in range(len(nums)):
        x = nums[i]
        if(map.get(target - x)):
            return [map.get(target - x), i+1]
        map[x] = i+1
    
    raise Exception("No solution found")


## Reserved for Test Cases
cases = [
    {
        "input": code(nums=[1,4,11,6,8], target=10),
        "expected": [2,4]
    },
    {
        "input": code(nums=[1,4,11,6,8], target=9),
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