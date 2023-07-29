// https://leetcode.com/problems/pascals-triangle-ii/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let ans = [[1]];
    for (i = 0; i < rowIndex; i++) {
      let temp = [];
      temp.push(0, ans[ans.length - 1], 0);
      temp = temp.flat();
      ref = [];
      for (j = 0; j < temp.length - 1; j++) {
        ref.push(parseInt(temp[j]) + parseInt(temp[j + 1]));
      }
      ans.push(ref);
    }
    return ans[rowIndex];
};

// Test Case 01
console.log(getRow(3));

// Test Case 02
console.log(getRow(0));

// Test Case 03
console.log(getRow(1));
