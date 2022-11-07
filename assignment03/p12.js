// https://www.hackerrank.com/challenges/find-the-median/problem

const findMedian = function (arr) {
    for(let i=0; i<arr.length;i++){
        let min = i;
        for(let j=i; j<arr.length;j++){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
    }
    return arr[parseInt((arr.length+1)/2)-1];
}
;

// Test Case 1
console.log(findMedian("0 1 2 4 6 5 3".split(' ')));

// Test Case 2
// console.log(findMedian());

// Test Case 3
// console.log(findMedian());
