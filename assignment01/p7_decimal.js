/**
 * @param {number} x
 * @return {boolean}
 * Solve using decimal
 */
const isPalindrome = function(x) {
    if(x < 0)
        return false;
    else if(x.length == 1)
        return true;
    else{
        let rx = reverseByDecimalPlace(x);
        if(rx == x){
            return true;
        }
    }
    
    return false;
};

const reverseByDecimalPlace = (number) => {
    let next = number % 10;
    let n = parseInt(number / 10);
    let rvs = next;

    while(n > 0){
        next = n % 10;
        n = parseInt(n / 10);
        rvs = next + 10 * rvs;
    }

    return rvs;
}

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

