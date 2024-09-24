# https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

def plusMinus(arr):
    plus, minus, zero = 0, 0, 0
    for x in arr:
        if x == 0:
            zero += 1
        elif x > 0:
            plus += 1
        elif x < 0:
            minus += 1
    total = len(arr)
    print(plus / total)
    print(minus / total)
    print(zero / total)

# Expected
# 0.500000
# 0.333333
# 0.166667
# Time Complexity O(n)
# Space Complexity O(1)
arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)