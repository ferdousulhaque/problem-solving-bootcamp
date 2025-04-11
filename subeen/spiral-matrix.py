# Task is to transform the m*n matrix to a linear matrix

def code(**kwargs) -> list:
    # Change the below variables according to your problem
    matrix = kwargs['matrix']
    m = len(matrix)
    if m == 0:
        return []
    n = len(matrix[0])
    
    linear_matrix = []
    direction = 1
    top = 0
    left = 0
    right = n
    bottom = m
    
    while True:
        if len(linear_matrix) == (m * n):
            break
        # traverse from left to right
        if direction == 1:
            for i in range(left, right):
                linear_matrix.append(matrix[top][i])
            top += 1
        # traverse from top to bottom
        if direction == 2:
            for i in range(top, bottom):
                linear_matrix.append(matrix[i][right-1])
            right -= 1
        # traverse from right to left
        if direction == 3:
            for i in range(right-1,left-1,-1):
                linear_matrix.append(matrix[bottom-1][i])
            bottom -= 1
        # traverse from bottom to top
        if direction == 4:
            for i in range(bottom-1,top-1,-1):
                linear_matrix.append(matrix[i][left])
            left += 1
            
        direction = (direction+1) % 4
        
    return linear_matrix


## Reserved for Test Cases
cases = [
    {
        "input": code(matrix=[[1,2,4],[6,5,3],[4,8,9]]),
        "expected": [1,2,4,3,9,8,4,6,5]
    },
    {
        "input": code(matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]),
        "expected": [1,2,3,4,8,12,11,10,9,5,6,7]
    },
    {
        "input": code(matrix=[]),
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
# print(code(matrix=[[1,2,4],[6,5,3],[4,8,9]]))