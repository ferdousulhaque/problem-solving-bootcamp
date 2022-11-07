// https://leetcode.com/problems/missing-number/

const missingNumber = function(nums) {
    let n = nums.length;
    let sum = parseInt((n * (n+1))/2);
    let numsSum = 0;
    for(let i=0; i<n; i++){
        numsSum += nums[i];
    }
    return Math.abs(sum-numsSum);
};

// Test Case 1
console.log(missingNumber([3,0,1], 2));

// Test Case 2
console.log(missingNumber([7,6,4,2,3,5,9,0,1], 1));

// Test Case 3
console.log(missingNumber([0,1], 2));