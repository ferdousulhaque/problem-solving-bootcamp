# https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-two

def lonelyinteger(a: list) -> int:
    lonely = {}
    for i in a:
        if lonely.get(i):
            lonely.pop(i)            
        else:
            lonely[i] = 1
    for i in lonely:
        return i


# You will get output as 4
# Time Complexity O(n)
# Space Complexity O(n)
print(lonelyinteger([1,2,3,4,3,2,1]))