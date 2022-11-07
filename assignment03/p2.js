// https://leetcode.com/problems/majority-element/

const majorityElement = function(nums) {
    let moreTimes = parseInt(nums.length / 2);
    let hashmap = new Map();
    let out = 0;

    // frequency map
    for(let i=0; i<nums.length; i++){
        let currV = hashmap.get(nums[i]);
        hashmap.set(nums[i],currV ? currV + 1: 1);
    }

    // iterate hashmap
    hashmap.forEach((v,k) => {
        if(v > moreTimes){
            out = k;
            return;
        }
    });
    
    return out;
};

// Test Case 1
console.log(majorityElement([3,2,3]));

// Test Case 2
console.log(majorityElement([2,2,1,1,1,2,2]));

// Test Case 3
console.log(majorityElement([-110000,-110000,-300,-110000,-300,2,2,-110000, -110000]));