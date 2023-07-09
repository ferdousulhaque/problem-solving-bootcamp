/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let left = 0;
  let position;
  let nums_unique = new Set(nums);
  nums = Array.from(nums_unique);

  if (nums.length == 1) 
    return nums[0];
  else if (nums.length == 2) {
    if (nums[0] > nums[1]) 
      return nums[0];
    else 
      return nums[1];
  }else{
    while (left < 3) {
      let max = Number.MIN_SAFE_INTEGER;
      for (let i = left; i < nums.length; i++) {
        if (nums[i] > max) {
          position = i;
          max = nums[i];
        }
      }
      [nums[left], nums[position]] = [nums[position], nums[left]];
      left++;
    }
    
    return nums[2];
  }
}
    
// Test Case 1
console.log(thirdMax(
        [3, 2, 1]
    ));

// Test Case 2
console.log(thirdMax(
        [2, 2, 3, 1]
    ));

// Test Case 3
console.log(thirdMax(
    [1, 1, 2]
    ));

// Test Case 4
console.log(thirdMax(
        [-2, 1, 0, 0, 3, 3, 4]
    ));

// Test Case 5
console.log(thirdMax(
        [1, 1, 1]
    ));