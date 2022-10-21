
//param A : integer
//return a array of strings
const fizzBuzz = function(A){
    let values = [];
    for(let i=1;i<=A;i++){
        if(i % 5 == 0 && i % 3 == 0)
            values.push('FizzBuzz');
        else if(i % 3 == 0)
            values.push('Fizz');
        else if(i % 5 == 0)
            values.push('Buzz');
        else
            values.push(i.toString());
    }

    return values;
}

// Test Case 1
console.log(fizzBuzz(20))

// Test Case 2
console.log(fizzBuzz(35))

// Test Case 3
console.log(fizzBuzz(50))
