// https://leetcode.com/problems/plus-one/

const plusOne = function(digits) {
    if(digits[digits.length-1] != 9){
        digits[digits.length-1]=digits[digits.length-1]+1;
    }else{
        let i=digits.length-1;
        for(; i>=0; i--){
            if(digits[i] == 9){
                digits[i] = 0;
            }else{
                break;
            }
        }
        // console.log(i);
        if(i < 0){
            digits.unshift(1);
        }else{
            digits[i]= digits[i] +1;
        }
        
    }
    return digits;
};

// Test Case 1
console.log(plusOne([9,8,9]));

// Test Case 2
console.log(plusOne([1,9,7]));

// Test Case 3
console.log(plusOne([9,9]));

// Test Case 4
console.log(plusOne([1,5,9,9]));

// Test Case 5
console.log(plusOne([4,3,2,1,2,3,4,5,6,7,9,9]));

// Test Case 6
console.log(plusOne([9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9]));

// Test Case 7
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));