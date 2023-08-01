// https://leetcode.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */

var pivotIndex = function (nums) {
  for(let pointer=0; pointer<nums.length; pointer++){
    let left_sum = 0,
      right_sum = 0;
    //left sum
    if(pointer > 0){
      for (let i = pointer - 1; i >= 0; i--) {
        left_sum += nums[i];
      }
    }
    
    //right sum
    if(pointer < nums.length-1){
      for (let i = pointer + 1; i < nums.length; i++) {
        right_sum += nums[i];
      }
    }
    
    // console.log(pointer, left_sum, right_sum);
    if(left_sum == right_sum){
      return pointer;
    }
  }

  return -1;
};


// Test Case 01
console.log(pivotIndex(
    [1, 7, 3, 6, 5, 6]
    ));

// Test Case 02
console.log(pivotIndex(
    [1,2,3]
    ));

// Test Case 03
console.log(pivotIndex(
    [2,1,-1]
    ));

// Test Case 04
console.log(pivotIndex(
    [-1,-1,-1,-1,-1,0]
    ));