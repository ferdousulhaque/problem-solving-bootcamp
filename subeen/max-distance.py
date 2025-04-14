# Get the max distance of index from an array
# considering arr[i] =< arr[j]

# T -> O(nlogn) and S -> O(1)

def code(**kwargs) -> int:
    # Change the below variables according to your problem
    arr = kwargs['arr']
    maxDistance = 0
    # O(n^2) Solution
    for i in range(len(arr)):
        for j in range(i+1, len(arr)):
            if(arr[i] <= arr[j]):
                if((j-i) > maxDistance):
                    maxDistance = j-i
    
    return maxDistance


## Reserved for Test Cases
cases = [
    {                
        "input": code(arr=[3,5,4,2]),
        "expected": 2
    },
    {
        "input": code(arr=[5,3,4,4,4,2]),
        "expected": 3
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