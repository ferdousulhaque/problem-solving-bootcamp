/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    let hashmap = new Map();
    let flag = false;
    for(let i = 0; i< nums.length; i++){
        if(hashmap.has(nums[i]))
            return true;
        else
            hashmap.set(nums[i], 1);
    }
    return flag;
};

// Test Case 1
console.log(containsDuplicate([2,3,3,1]))

// Test Case 2
console.log(containsDuplicate([1,2,3,4]))

// Test Case 3
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))