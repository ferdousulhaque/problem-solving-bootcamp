// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = function (s) {
    if(s.length == 1)
        return 0;
    else if(s.length == 2 & s[0] != s[1])
        return 0;
    else if(s.length == 2 & s[0] == s[1])
        return -1;
    else{
        let firstUnique = -1;
        let freqMap = new Map();

        //frequency map
        for(const element of s){
            let count = freqMap.get(element);
            freqMap.set(element, count ? count+1 : 1);
        }

        for(let i=0; i<s.length; i++){
            freqMap.forEach((values,keys) => {
                if(s[i] == keys && values == 1){
                    firstUnique = i;
                    return;
                }
            })
            if(firstUnique >= 0)
                break;
        }

        return firstUnique;
    }

}

// Test Case 1
console.log(firstUniqChar('leetcode'));

// Test Case 2
console.log(firstUniqChar('loveleetcode'));

// Test Case 3
console.log(firstUniqChar('aabba'));