// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

const removeDuplicates = function (nums) {
    const set = new Set(nums);
    let i = 0;
    set.forEach((value) => {
      nums[i] = value;
      i++;
    });
    return set.size;
};

// Test Case 01
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Test Case 02

// Test Case 03