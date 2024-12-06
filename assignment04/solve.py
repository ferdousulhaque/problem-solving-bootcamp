#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'caesarCipher' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING s
#  2. INTEGER k
#

def caesarCipher(s, k):
    result = []
    for char in s:
        char_ascii = ord(char)
        if(char_ascii > 96 and char_ascii < 123):
            change_ascii = char_ascii + (k % 26)
            if(change_ascii > 122):
                change_ascii = 96 + abs(change_ascii - 122)
            result.append(chr(change_ascii))
        elif(char_ascii > 64 and char_ascii < 91):
            change_ascii = char_ascii + (k % 26)
            if(change_ascii > 90):
                change_ascii = 64 + abs(change_ascii - 90)
            result.append(chr(change_ascii))
        else:
            result.append(char)
    
    print(''.join(result))
    

if __name__ == '__main__':
    #fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = 11

    s = "middle-Outz"

    k = 100

    result = caesarCipher(s, k)

    # print(result)

    #fptr.write(result + '\n')

    #fptr.close()
