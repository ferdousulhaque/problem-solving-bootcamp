/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let intToArr = x.toString().split('');
    let flag = true;
    for(let i=0; i<intToArr.length; i++){
        if(i == intToArr.length-i)
            break;
        if(intToArr[i] !== intToArr[intToArr.length-i-1])
            flag = false;
    }
    return flag;
};

// Test Case 1
console.log(isPalindrome(-121));

// Test Case 2
console.log(isPalindrome(124421));

// Test Case 3
console.log(isPalindrome(10));

// Test Case 4
console.log(isPalindrome(12331));

// Test Case 5
console.log(isPalindrome(1));

