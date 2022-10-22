// Write a code find the 'longest string' from a list of strings.

function power(x, n){
        let flag = true;
        if(n<0){
            n = n*-1;
            flag = false;
        }
        for(let i=1; i<n; i++){
            x *=x;
        }
        return flag?x:(1/x);
}

// Test Case 1
console.log(power(2,2))

// Test Case 2
console.log(power(2,3))

// Test Case 3
console.log(power(2,0))

// Test Case 4
console.log(power(5,5))

// Test Case 4
console.log(power(2,-2))