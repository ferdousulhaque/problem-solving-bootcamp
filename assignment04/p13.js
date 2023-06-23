/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let left = 0;
  let right = 0;

  while (left < nums.length) {
    if (nums[left] !== 0) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right++;
    }
    left++;
    
  }
  return nums;
};


// Test Case 1
console.log(moveZeroes(
        [0, 1, 0, 3, 12]
    ));

// Test Case 2
console.log(moveZeroes(
        [0]
    ));

// Test Case 3
console.log(moveZeroes(
        [-10, -5, 0, 3, 12]
    ));

// Test Case 4
console.log(moveZeroes(
        [0, 0, 1, 0, 0, 1]
    ));

// // Test Case 5
console.log(moveZeroes(
        [0, 0, 0, 1, 0, 1]
    ));

// Test Case 6
console.log(moveZeroes(
        [10, 0, 0, -10, 0, 0, 0, 0, 0, 1, 0, 1]
    ));