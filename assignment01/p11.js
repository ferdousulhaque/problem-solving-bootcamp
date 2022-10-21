/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let max = 0;

    nums.forEach(x => {
        if(x == 0)
            counter = 0;
        if(x == 1)
            counter++;
        if(counter > max)
            max = counter;
    });

    return max;
};

// Test Case 1
console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));

// Test Case 2
console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]));

// Test Case 3
console.log(findMaxConsecutiveOnes([0,0,1,1,1,1,0,1,1]));