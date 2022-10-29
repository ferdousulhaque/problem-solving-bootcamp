// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = function(s) {
    let asciiStr = "";

    for(let index=0; index<s.length; index++){
        if(s.charCodeAt(index) > 64 && s.charCodeAt(index) < 91){
            asciiStr = asciiStr + String.fromCharCode(s.charCodeAt(index) +32);
        }
        else if((s.charCodeAt(index) > 96 && s.charCodeAt(index) < 123) || (s.charCodeAt(index) > 47 && s.charCodeAt(index) < 58)){
            asciiStr = asciiStr + s[index];
        }
    }
    
    return asciiStr.split('').reverse().join('') === asciiStr;
};

// Test Case 1
console.log(isPalindrome("A man,   1a plan, a canal: Panama"));

// Test Case 2
console.log(isPalindrome("race a car"));

// Test Case 3
console.log(isPalindrome(" "));

// Test Case 4
console.log(isPalindrome("A   man,  $ a plan, _ a /  ? canal: Panama"));

// Test Case 5
console.log(isPalindrome("$ #"));

// Test Case 6
console.log(isPalindrome("9P"));