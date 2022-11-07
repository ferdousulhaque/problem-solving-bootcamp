// https://leetcode.com/problems/contains-duplicate-ii/

// TODO: Complete the Solution
const containsNearbyDuplicate = function(nums, k) {
    if(k === 0){
        return false;
    }
    else if(nums.length < 2){
        return false;
    }else if(nums.length < 3){
        return (nums[0] == nums[1]) ? true: false;
    }
    for(let i=0; i<nums.length; i++){
        if(i+k < nums.length){
            if(nums[i] == nums[i+k])
                return true;
        }else{
            break;
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