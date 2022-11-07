// https://leetcode.com/problems/happy-number/

// TODO: Complete the Solution
const isHappy = function (n) {
  let next,
    sum = 0;

  while (true) {
    while (n > 0) {
      next = n % 10;
      n = parseInt(n / 10);
      sum += next * next;
    }
    if (sum == 1) {
      return true;
    }
    n = sum;
    console.log(n);
    sum = 0;
  }
};

// Test Case 1
console.log(isHappy(19));

// Test Case 2
// console.log(isHappy(2));

// Test Case 3
console.log(isHappy(50));
