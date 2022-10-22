/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    let result = [];
    if(nums.length == 2){
        return [0, 1];
    }else{
        let hashmap = new Map();
        
        for(let i = 0; i< nums.length; i++){
            if(hashmap.has(target - nums[i])){
                result.push(hashmap.get(target - nums[i]))
                result.push(i);
                break;
            }
            hashmap.set(nums[i], i);
        }

        return result;
    }
};

// Test Case 1
console.log(twoSum([2,11,7,15], 9));

// Test Case 2
console.log(twoSum([-3,4,9], 6));

// Test Case 3
console.log(twoSum([3,2,4], 6));

// Test Case 4
console.log(twoSum([-3,-1,-3], -6));

// Test Case 5
console.log(twoSum([-10,-2,4], -6))

// Test Case 6
console.log(twoSum([3,3], 6))