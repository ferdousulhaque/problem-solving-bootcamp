// https://leetcode.com/problems/contains-duplicate-ii/

const containsNearbyDuplicate = function(nums, k) {
    if(k === 0){
        return false;
    }
    for(let i=0; i<nums.length; i++){
        for(let j=i+1; j<nums.length; j++){
            if (nums[i] == nums[j] && (Math.abs(i-j) <= k)) {
              return true;
            }
        }
    }
    return false;
};

// Test Case 1
console.log(containsNearbyDuplicate([1,2,3,1], 3));

// Test Case 2
console.log(containsNearbyDuplicate([1,0,1,1], 1));

// Test Case 3
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2));

// Test Case 4
console.log(containsNearbyDuplicate([1,2,1], 0));

// Test Case 5
console.log(containsNearbyDuplicate([0,1,2,3,2,5], 3));