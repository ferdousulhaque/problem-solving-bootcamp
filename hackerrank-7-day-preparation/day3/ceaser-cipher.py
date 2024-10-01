# https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D=one-week-day-three

def caesarCipher(s, k):
    if k == 0:
        return s
    cipher = ""
    for char in s:
        if (ord(char) > 64 and ord(char) < 91) or (ord(char) > 96 and ord(char) < 123):
            if char.islower():
                cipher = cipher + chr((ord(char) + k - ord('a')) % 26 + ord('a'))
            else:
                cipher = cipher + chr((ord(char) + k - ord('A')) % 26 + ord('A'))
        else:
            cipher = cipher + char
    return cipher

# Expected: okffng-Qwvb
print(caesarCipher('middle-Outz', 2))