// https://leetcode.com/problems/reshape-the-matrix/

/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  // Edge Case 01
  if (r == 1) {
    let max = mat.flat().length;
    if (c == max) {
      return [mat.flat()];
    } else {
      return mat;
    }
  }

  // Edge Case 02
  else if (c == 1) {
    let max = mat.flat().length;
    if (r == max) {
      let result = [];
      mat.flat().forEach((x) => {
        result.push([x]);
      });
      return result;
    } else {
      return mat;
    }
  }

  // Edge Case 03
  else if (parseInt(mat.flat().length / r) == c) {
    let items = mat.flat();
    let loop = [];
    let result = [];
    let column = 0;
    items.forEach((x) => {
      loop.push(x);
      column += 1;
      if (column % c == 0) {
        result.push(loop);
        loop = [];
      }
    });
    return result;
  }

  // Edge Case 04
  else if (parseInt(mat.flat().length / c) == r) {
    let items = mat.flat();
    let loop = [];
    let result = [];
    let column = 0;
    items.forEach((x) => {
      loop.push(x);
      column += 1;
      if (column % r == 0) {
        result.push(loop);
        loop = [];
      }
    });
    return result;
  }

  return mat;
};

// Test Case 01
console.log(
  matrixReshape(
    [
      [1, 2, 3, 4, 5, 6],
      [3, 4, 5, 6, 7, 8],
    ],
    3,
    4
  )
);

// Test Case 02
// console.log(
//   matrixReshape(
//     [
//       [1, 2],
//       [3, 4],
//     ],
//     2,
//     4
//   )
// );