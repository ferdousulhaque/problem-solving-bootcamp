# Check if can hotel booking possible or not
# 

# T -> O(nlogn) and S -> O(1)

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    arrivals = kwargs['arrivals']
    departure = kwargs['departure']
    K = kwargs['K']
    # days = {}

    # T -> O(n*m) and S -> O(K)
    # for start, end in zip(arrivals,departure):
    #     for i in range(start, end):
    #         if(days.get(i)):
    #             days[i] += 1
    #         else:
    #             days[i] = 1
    #         if(days[i] > K):
    #             return False
    # return True

    arrivals.sort()
    departure.sort()
    i = 0
    j = 0
    n = len(arrivals)
    room = 0
    while( i < n and j < n):
        if(arrivals[i] < departure[j]):
            room += 1
            i += 1
        else:
            room -= 1
            j += 1
        if(room > K):
            return False
    return True


## Reserved for Test Cases
cases = [
    {                
        "input": code(arrivals=[1,3,5], departure=[2,6,8], K=1),
        "expected": False
    },
    {                
        "input": code(arrivals=[1,3,5], departure=[2,6,8], K=2),
        "expected": True
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