# Remove the duplicates in the array without using extra array.
# Optimizing Space Complexity

# T ->  and S -> O(1)

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    arr = kwargs['arr']
    cursor = 0
    for i in range(len(arr)):
        if arr[cursor] != arr[i]:
            cursor += 1
            arr[cursor] = arr[i]
    return arr[:cursor+1]


## Reserved for Test Cases
cases = [
    {
        "input": code(arr=[1,1,2,2,2,3,3]),
        "expected": [1,2,3]
    },
    {
        "input": code(arr=[5,5,3,3,3,2,1]),
        "expected": [5,3,2,1]
    },
    {
        "input": code(arr=[1,1,1,1]),
        "expected": [1]
    },
    {
        "input": code(arr=[]),
        "expected": []
    }
]

def tests(cases: list) -> None:
    # print()
    for idx, case in enumerate(cases):
        if case['input'] == case['expected']:
            print(f'Case {idx+1}: PASS')
        else:
            print(f'Case {idx+1}: FAIL')

tests(cases)