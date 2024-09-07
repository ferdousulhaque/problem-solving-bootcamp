# relevant questions:
# - What about an empty string? Is it a valid palindrome?
# - How many gaps may apprear

# T -> O(n) and S -> O(1)

def code(**kwargs) -> bool:
    # Change the below variables according to your problem
    msg = kwargs['msg']
    # Write solution here
    if(msg == ""):
        return True
    
    i, j = 0, len(msg)-1
    while(i < j):
        while( i < j and (msg[i].isalnum() is not True)):
            i = i + 1
        while( i < j and (msg[j].isalnum() is not True)):
            j = j - 1
        if(str.lower(msg[i]) != str.lower(msg[j])):
            return False
        i = i + 1
        j = j - 1

    return True


## Reserved for Test Cases
cases = [
    {
        "input": code(msg = "A man, a plan, a canal: Panama"),
        "expected": True
    },
    {
        "input": code(msg = "race a car"),
        "expected": False
    },
    {
        "input": code(msg = ""),
        "expected": True
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