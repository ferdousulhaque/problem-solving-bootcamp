// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = function (matrix) {
  let direction = 0;
  let visited = new Set;
  let result = [];
  while(true){
    // Move right
    if(direction == 0){
      for(let i=0; i<matrix[0].length; i++){
        let v = matrix[0][i];
        if (visited.has("0"+i.toString())){
          break;
        } else{
          result.push(v);
          visited.add("0" + i.toString());
        }
      }
      direction = 1;
    }

    // Move down
    if (direction == 1) {
      for (let i = 1; i < matrix.length; i++) {
        let v = matrix[i][matrix.length-1];
        if (visited.has(i.toString() + `${matrix.length-1}`)) {
          break;
        } else {
          result.push(v);
          visited.add(i.toString() + `${matrix.length - 1}`);
        }
      }
      direction = 2;
    }

    // Move left
    if (direction == 2) {
      for (let i = matrix[0].length-2; i >= 0; i--) {
        let v = matrix[matrix.length - 1][i];
        if (visited.has(`${matrix.length - 1}${i}`)) {
          break;
        } else {
          result.push(v);
          visited.add(`${matrix.length - 1}${i}`);
        }
      }
      direction = 3;
    }

    if(direction == 3){
      console.log(visited);
      break;
    }
  }

  return result;
};

const spiralOrder2 = function (matrix) {
  let top = 0;
  let bottom = matrix.length;
  let left = 0;
  let right = matrix[0].length;
  let visited = new Set();
  let result = [];

  while (left < right && top < bottom){
    for(let i=left; i<right; i++){
      result.push(matrix[top][i]);
    }
    top += 1;
    break;
  }

  console.log(result);

};

// Test Case 1
// console.log(
//   spiralOrder2([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ])
// );

// Test Case 2
console.log(
  spiralOrder2([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
  ])
);

// Test Case 3
// console.log(
//   spiralOrder([
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12]
//     [13, 14, 15, 16]
//   ])
// );