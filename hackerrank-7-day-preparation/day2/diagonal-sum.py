# https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

def diagonalDifference(arr):
    f_sum, b_sum = 0, 0
    n = len(arr[0])
    a = 0
    b = n-1
    for x in range(n):
        f_sum += arr[x][x]
        b_sum += arr[a][b]
        a += 1
        b -= 1
        
    differ = abs(f_sum - b_sum)
    return differ


arr = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

# Expected outcome is 15
# Time Complexity O(n)
# Space Complexity O(1)
print(diagonalDifference(arr))