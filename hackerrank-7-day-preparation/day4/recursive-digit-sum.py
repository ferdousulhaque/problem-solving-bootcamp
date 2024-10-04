# https://www.hackerrank.com/challenges/one-week-preparation-kit-recursive-digit-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four

# Way #01 -> Passed 7 out of 11 Test Cases [7/11]
def superDigit7By11(n, k):
    n = n * k
    # base condition
    if len(n) == 1:
        return n
    # recursion
    total = 0
    for digit in n:
        total += int(digit)
    return superDigit7By11(str(total), 1)

# Way #02 -> Passed all test cases
def superDigit(n, k):
    if len(n) == 1:
        return n
    else:
        total = 0
        for digit in n:
            total += int(digit)
        return superDigit(str(total * k), 1)
    

# Expected 8
# Time Complexity O(2^n)
# Space Complexity O(1)
print(superDigit7By11("9875", 4))

# Time Complexity O(2^n)
# Space Complexity O(1)
print(superDigit("9875", 4))