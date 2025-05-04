# 

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    array = kwargs['array']
    merge = kwargs['merge']
    array.append(merge)
    array.sort(key=lambda x: x[0])
    print(array)




## Reserved for Test Cases
cases = [
    {                
        "input": code(array=[], merge=[1,2]),
        "expected": [[1,2]]
    },
    {                
        "input": code(array=[[1,4],[8,10]], merge=[5,7]),
        "expected": [[1,10]]
    },
    {                
        "input": code(array=[[1,4],[11,20]], merge=[5,7]),
        "expected": [[1,7],[11,20]]
    },
    {                
        "input": code(array=[[1,8],[4,6],[11,20]], merge=[2,5]),
        "expected": [[1,8],[11,20]]
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