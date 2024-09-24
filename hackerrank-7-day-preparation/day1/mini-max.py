# https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

def miniMaxSum(arr):
    total = 0
    mini = maxi = arr[0]
    for x in arr:
        total += x
        if x > maxi:
            maxi = x
        if x < mini:
            mini = x
    print(str(total - maxi) + " " + str(total - mini))

# Time Complexity O(n)
# Space Complexity O(1)
# Expected result "10 14"
miniMaxSum([1,2,3,4,5])