# There is an array of intervals where each interval is represented as a list of two integers [start, end].
# Merge all overlapping intervals and return an array of non-overlapping intervals that cover all the intervals in the input.
# Example:
# Input: intervals = [[1,3],[2,6],[8,10],[15,18],[17,20]]
# Output: [[1,6],[8,10],[15,20]]

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    intervals = kwargs['intervals']
    intervals.sort(key=lambda x: x[0])

    merged = []
    merged.append(intervals[0])
    for i in range(1, len(intervals)):
        if merged[-1][1] >= intervals[i][0]:
            merged[-1][1] = max(merged[-1][1], intervals[i][1])
        else:
            merged.append(intervals[i])
    
    return merged



## Reserved for Test Cases
cases = [
    {                
        "input": code(intervals=[[1,3],[2,6],[8,10],[15,18],[17,20]]),
        "expected": [[1,6],[8,10],[15,20]]
    },
    {                
        "input": code(intervals=[[1,4],[4,5]]),
        "expected": [[1,5]]
    },
    {                
        "input": code(intervals=[[1,2],[3,4],[5,6],[7,8]]),
        "expected": [[1,2],[3,4],[5,6],[7,8]]
    },
    {                
        "input": code(intervals=[[1,4],[2,3]]),
        "expected": [[1,4]]
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