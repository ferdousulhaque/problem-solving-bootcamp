// https://www.hackerrank.com/challenges/insertionsort1/problem

const insertionSort1 = function (n, arr){
  let last = arr[n - 1];
  for(let i=n-2; i>=0; i--){
    if(last < arr[i]){
      arr[i + 1] = arr[i];
      
      console.log(arr.join(" "));
    }else{
      arr[i+1] = last;
      console.log(arr.join(" "));
      // break;
      return;
    }
  }
  if (arr[0] == arr[1]) {
    arr[0] = last;
    console.log(arr.join(" "));
    return;
  }
}

// Test Case 1
// insertionSort1(5, [2, 4, 6, 8, 3]);
// console.log("\n");

// // Test Case 2
// insertionSort1(5, [2, 4, 6, 8, 7]);
// console.log("\n");

// // Test Case 3
// insertionSort1(5, [2, 4, 6, 8, 1]);
// console.log("\n");

// Test Case 4
insertionSort1(10, [2, 3, 4, 5, 6, 7, 8, 9, 10, 1]);