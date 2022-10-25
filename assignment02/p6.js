// https://leetcode.com/problems/valid-anagram/

const isAnagram = function(s, t) {
    if(s.length != t.length)
        return false;
    else{
        let freqMapS = new Map();
        let freqMapT = new Map();
        for(let i=0; i<s.length; i++){
            // Update S
            let countS = freqMapS.get(s[i]);
            freqMapS.set(s[i], countS ? countS+1 : 1);

            // Update T
            let countT = freqMapT.get(t[i]);
            freqMapT.set(t[i], countT ? countT+1 : 1);
        }

        let flag = true;
        for(const element of s){
            if(freqMapT.get(element) != freqMapS.get(element)){
                flag = false;
                break;
            }
        }

        return flag;
    }
};

// Test Case 1
console.log(isAnagram('anagram', 'nagaram'));

// Test Case 2
console.log(isAnagram('rat', 'car'));

// Test Case 3
console.log(isAnagram('rate', 'car'));

// Test Case 4
console.log(isAnagram("a", "ab"));