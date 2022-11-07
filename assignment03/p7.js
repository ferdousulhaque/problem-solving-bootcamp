// https://www.hackerrank.com/challenges/flipping-bits/problem

const flippingBits = function (n) {
    let max = 2 * ((1 << 31) >>> 0);
    return max - n - 1;
};

// Test Case 1
console.log(flippingBits(4));

// Test Case 2
console.log(flippingBits(123456));

// Test Case 3
console.log(flippingBits(35601423));