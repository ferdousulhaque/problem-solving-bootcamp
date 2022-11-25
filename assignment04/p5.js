// https://www.hackerrank.com/challenges/insertionsort2/problem

const insertionSort2 = function (n, arr){
  for(let i=1; i<n; i++){
    if(arr[i-1] > arr[i]){
      let temp = arr[i-1];
      arr[i-1] = arr[i];
      arr[i] = temp;
    }console.log(arr);
  }
  // console.log(arr);
}

// Test Case 1
insertionSort2(8, [8, 7, 6, 5, 4, 3, 2, 1])

// Test Case 2
// insertionSort2(6, [1, 3, 4, 5, 6, 2]);

// Test Case 3
// insertionSort2(6, [1, 4, 3, 5, 6, 2]);
