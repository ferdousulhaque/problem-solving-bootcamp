// https://www.hackerrank.com/challenges/array-left-rotation/problem

const rotateLeft = (d, arr) => {
    if(arr.length == 1){
        return arr;
    }else{
        for(let i=0; i<d; i++){
            let first = arr[0];
            let j = 0;
            for(; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr[j-1] = first;
        }
        return arr;
    }
}


// Test Case 1
console.log(rotateLeft(3, [1, 2, 3, 4, 5]));

// Test Case 2
console.log(rotateLeft(1, [2]));

// Test Case 3
console.log(rotateLeft(2, [1, 1000000]));


