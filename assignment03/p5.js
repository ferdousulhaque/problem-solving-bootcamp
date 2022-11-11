// https://leetcode.com/problems/happy-number/

const isHappy = function (n) {
  let next,
    sum = 0,
    sums = new Set();

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
    if(sums.has(n)){
      return false;
    }
    sums.add(n);
    sum = 0;
  }
};

// Test Case 1
console.log(isHappy(19));

// Test Case 2
console.log(isHappy(2));

// Test Case 3
console.log(isHappy(50));
