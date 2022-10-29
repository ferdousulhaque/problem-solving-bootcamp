// https://www.hackerrank.com/challenges/arrays-ds/problem

const reverseArray = (a) => {
    if(a.length == 1){
        return a;
    }else{
        // With Built-in function
        // return a.reverse();

        // Without Built-in function
        for(let i=0; i< parseInt(a.length/2);i++){
            let last = a[a.length-1-i];
            a[a.length-1-i] = a[i];
            a[i]=last;
        }
        return a;
    }
}


// Test Case 1
console.log(reverseArray([1, 2, 3]));

// Test Case 2
console.log(reverseArray([1, 3, 2, 4]));

// Test Case 3
console.log(reverseArray([1]));


