# Find the maximum contiguous sum in the array
# https://leetcode.com/problems/maximum-subarray/

# T ->  and S -> 

def code(**kwargs) -> int:
    # Change the below variables according to your problem
    arr = kwargs['arr']
    maxSum = -9999
    # O(n^2) Solution
    # for i in range(len(arr)):
    #     if(arr[i] > maxSum):
    #         maxSum = arr[i]
    #     currentSum = arr[i]
    #     for j in range(i+1,len(arr)):
    #         currentSum += arr[j]
    #         if(currentSum > maxSum):
    #             maxSum = currentSum
    
    # O(n) Solution
    currentSum = 0
    for i in range(len(arr)):
        currentSum += arr[i]
        if(currentSum > maxSum):
            maxSum = currentSum
        if currentSum < 0:
            currentSum = 0
    
    return maxSum


## Reserved for Test Cases
cases = [
    {
        "input": code(arr=[-1, -2, 1, 2, 3, -5, 4]),
        "expected": 6
    },
    {
        "input": code(arr=[-2,1,-3,4,-1,2,1,-5,4]),
        "expected": 6
    },
    {
        "input": code(arr=[1]),
        "expected": 1
    },
    {
        "input": code(arr=[5,4,-1,7,8]),
        "expected": 23
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