# https://www.hackerrank.com/challenges/one-week-preparation-kit-grid-challenge/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-four

def gridChallenge(grid):
    result = True
    
    for i in range(len(grid)):
        grid[i] = ''.join(sorted(grid[i]))
    
    for j in range(len(grid[0])):
        for i in range(1, len(grid)):
            result &= (ord(grid[i][j]) >= ord(grid[i-1][j]))
            if result is False:
                return 'NO'
    return 'YES'

# Expected: YES
# Time Complexity O(n^2)
# Space Complexity O(1)
grid = ['ebacd', 'fghij', 'olmkn', 'trpqs', 'xywuv']
print(gridChallenge(grid))