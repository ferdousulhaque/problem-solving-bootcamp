// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

const twoSum = function (numbers, target) {
    let result = [];
    if(numbers.length == 2){
        result = [1, 2];
    }else{
        let hashmap = new Map();
        
        for(let i = 0; i< numbers.length; i++){
            if(hashmap.has(target - numbers[i])){
                result.push(hashmap.get(target - numbers[i]))
                result.push(i+1);
                break;
            }
            hashmap.set(numbers[i], i+1);
        }
    }
    return result;
}

// Test Case 1
console.log(twoSum([2,7,11,15], 9));

// Test Case 2
console.log(twoSum([2,7,11,15,17,20,23,35,50,53,61], 27));

// Test Case 3
console.log(twoSum([-1,0], -1));

// Test Case 4
console.log(twoSum([2,3,4], 6));

// Test Case 5
console.log(twoSum([-3,-1,-3], -6));

// Test Case 6
console.log(twoSum([-10,-2,4], -6))