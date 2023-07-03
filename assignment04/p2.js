// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = function (matrix) {
  let top, down, left, right;
  down = matrix.length-1;
  right = matrix[0].length-1;
  top = 0;
  left = 0;
  let direction = 0;
  let values = [];

  while(top <= down && left <= right){
    if(direction == 0){
      for(i=left; i<=right; i++){
        values.push(matrix[top][i])
      }
      direction = 1;
      top += 1;
    }
    else if (direction == 1) {
      for (i = top; i <= down; i++) {
        values.push(matrix[i][right]);
      }
      direction = 2;
      right -= 1;
    }
    else if (direction == 2) {
      for (i = right; i >= left; i--) {
        values.push(matrix[down][i]);
      }
      direction = 3;
      down -= 1;
    }
    else if (direction == 3) {
      for (i = down; i >= top; i--) {
        values.push(matrix[i][left]);
      }
      direction = 0;
      left += 1;
    }
  }
  return values;
}

// Test Case 1
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ])
);

// Test Case 2
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);

// Test Case 3
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ])
);