// Write a code to find ‘minimum’ value from a list of n numbers, 
// where 1 <= n <= 1000 and the numbers can be any integers.

function findMin(arr){
    let min = 1000;

    if(arr.length === 1)
        return arr[0]

    arr.forEach(element => {
        if(element < min)
            min = element;
    });

    return min;
}

// Test Case 1
console.log(findMin([1, 2, 3, 4, 5, 6]))

// Test Case 2
console.log(findMin([1000, 999, 998, 997]))

// Test Case 3
console.log(findMin([1]))

// Test Case 4
console.log(findMin([1000]))