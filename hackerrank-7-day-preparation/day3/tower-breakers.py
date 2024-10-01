# https://www.hackerrank.com/challenges/one-week-preparation-kit-tower-breakers-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three

def towerBreakers(n, m):
    if m == 1 or n % 2 == 0:
        return 2
    return 1

# Time Complexity O(1)
# Space Complexity O(1)
# Best strategy of this problem, is to write down at least about 5-7 cases 
# and you will get your way out
print(towerBreakers(1,1)) # Player 2 will always win
print(towerBreakers(1,2)) # Even number of towers Player 2 will always win
print(towerBreakers(1,3)) # Odd number of towers Player 1 will always win