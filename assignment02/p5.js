// https://leetcode.com/problems/first-unique-character-in-a-string/

const findDuplicates = function(nums) {
    if(nums.length == 1)
        return [];
    else{
        let duplicates = new Set();
        let freqMap = new Map();

        for(const element of nums){
            if(freqMap.has(element)){
                duplicates.add(element);
            }else{
                freqMap.set(element, 1);
            }
        }

        return [...duplicates];
    }
};

// Test Case 1
console.log(findDuplicates([4,3,2,7,8,2,3,1]));

// Test Case 2
console.log(findDuplicates([1,1,2]));

// Test Case 3
console.log(findDuplicates([1]));