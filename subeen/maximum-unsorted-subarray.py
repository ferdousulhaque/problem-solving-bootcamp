# Find the Maximum unmatched and their index
# 

# T -> O(nlogn) and S -> 

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    A = kwargs['A']
    A_sort = A[0:]
    A_sort.sort()
    output = []
    last_unmatch = 0
    for idx in range(len(A)):
        if(A[idx] != A_sort[idx] and len(output) == 0):
            output.append(idx)
        if(A[idx] != A_sort[idx]):
            last_unmatch = idx
    
    if(len(output) == 0):
        return [-1]

    output.append(last_unmatch)
    return output


## Reserved for Test Cases
cases = [
    {                
        "input": code(A=[1,3,2,4,5]),
        "expected": [1,2]
    },
    {                
        "input": code(A=[1,4,2,3,5]),
        "expected": [1,3]
    },
    {                
        "input": code(A=[1,2,3,4,5]),
        "expected": [-1]
    },
    {                
        "input": code(A=[3,2,1]),
        "expected": [0,2]
    },
    {                
        "input": code(A=[5,6,1,2,4,7]),
        "expected": [0,4]
    },
    {                
        "input": code(A=[-100,4,7,-110,10,50]),
        "expected": [0,3]
    },
]

def tests(cases: list) -> None:
    # print()
    for idx, case in enumerate(cases):
        if case['input'] == case['expected']:
            print(f'Case {idx+1}: PASS')
        else:
            print(f'Case {idx+1}: FAIL')

tests(cases)