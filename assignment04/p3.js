// https://www.hackerrank.com/challenges/diagonal-difference/problem

const diagonalDifference = function (arr) {
    let sum1=0, sum2=0;
    // Right Diagonal
    for(let i=0; i<arr.length; i++){
      sum1 += arr[i][i];
    }
    // Left Diagonal
    for (let i = 0; i < arr.length; i++) {
      sum2 += arr[i][arr.length-i-1];
    }
    if(sum1-sum2 < 0)
      return (-1)*(sum1-sum2);
    else
      return sum1-sum2;
};

// Test Case 1
console.log(
  diagonalDifference([
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ])
);
