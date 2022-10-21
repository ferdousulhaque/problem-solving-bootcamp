// Write a code find the 'longest string' from a list of strings.

function power(x, n){
    for(let i=n-1; i>0; i--){
        x *=x;
    }
    return x;
}

// Test Case 1
console.log(power(2,2))

// Test Case 2
console.log(power(2,3))

// Test Case 3
console.log(power(2,0))

// Test Case 4
console.log(power(5,5))