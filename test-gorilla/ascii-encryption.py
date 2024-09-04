# The ASCII Encoded Type will convert the text as below
# Your task is to convert the encoded text to decoded one.
# Coding tests is fun!
# Encoded: Eqfkpi vguvu ku hwp!
# One Example tests
# Here only 5 letters are in vguvu
# You need to check how many character gap is between
# Then convert all the strings to that except the special characters
# Coversion will take place between A-Z,a-z

def convert(message: str, reveal: str) -> str:
    matches = match_length(message, reveal)
    surprize = ""
    for one in matches:
        gap = ord(one[0]) - ord(reveal[0])
        if(gap < 0):
            continue
        else:
            for chars in message:
                if(chars == " "):
                    surprize = surprize + " "
                elif (ord(chars) > 64 and ord(chars) < 92) or (ord(chars) > 96 and ord(chars) < 123):
                    if chars.islower():
                        # To ensure that negative values do not come in
                        surprize = surprize + chr((ord(chars) - gap - ord('a')) % 26 + ord('a')) 
                    else:
                        surprize = surprize + chr((ord(chars) - gap - ord('A')) % 26 + ord('A'))
                else:
                    surprize = surprize + chars
        return surprize


def match_length(message: str, reveal: str) -> list:
    one_message = message.split(" ")
    matches = []
    for each in one_message:
        if len(each) == len(reveal):
           matches.append(each)
    return matches


def assertion(output: str, expected: str) -> bool:
    if(output == expected):
        return True
    else:
        return False


cases = [
    {
        "message": "Eqfkpi vguvu ku hwp!",
        "reveal": "tests",
        "expected": "Coding tests is fun!"
    },
    {
        "message": "Eqfkpi vguvu ku hwp!",
        "reveal": "tests",
        "expected": "Coding tests is fun!"
    }
]



for case in cases:
    if(assertion(
        convert(case['message'], case['reveal']),
        case['expected']
    )):
       print("Case: PASS")
    else:
       print("Case: FAIL")