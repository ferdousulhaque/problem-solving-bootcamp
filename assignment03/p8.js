// https://www.hackerrank.com/challenges/mini-max-sum/problem

const miniMaxSum = function (arr) {
    arr.sort((a,b) => a-b);
    let output = [0,0];
    for(let i=0; i<4; i++){
        output[0] += arr[i];
    }
    for (let i = arr.length - 1; i > arr.length - 5; i--) {
      output[1] += arr[i];
    }
    return `${output[0]} ${output[1]}`;
}

// Test Case 1
console.log(miniMaxSum([1,3,5,7,9]));

// Test Case 2
console.log(miniMaxSum([1,2,3,4,5]));

// Test Case 3
console.log(miniMaxSum([1]));
