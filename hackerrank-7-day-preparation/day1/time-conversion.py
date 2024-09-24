# https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-one

def timeConversion(s: str) -> str:
    hour = int(s[:2])
    day_night = s[8]
    append = ""
    if day_night == 'P':
        if hour == 12:
            append = s[:2]
        else:
            append = str(hour + 12)
    if day_night == 'A':
        if hour == 12:
            append = '00'
        else:
            append = s[:2]
    
    return append + s[2:8]


# Time Complexity O(1)
# Space Complexity O(1)
# Expected: 19:05:45
print(timeConversion("07:05:45PM"))