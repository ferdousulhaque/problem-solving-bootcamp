# https://leetcode.com/problems/merge-strings-alternately/?envType=study-plan-v2&envId=leetcode-75

class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        w1l = len(word1)
        w2l = len(word2)
        if(w1l > w2l):
            lp = w1l
        else:
            lp = w2l
        
        result = ""
        last = 0
        for index in range(lp):
            if index >= 0 and index < w1l:
                result = result + word1[index]
            if index >= 0 and index < w2l:
                result = result + word2[index]
        return result