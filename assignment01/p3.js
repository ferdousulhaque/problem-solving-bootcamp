// Write a code find the 'longest string' from a list of strings.

function decTobin(number){

    // base condition
    if(number == 0){
        return 0;
    }

    // recursion
    return (number % 2) + (10 * decTobin(parseInt(number / 2)));

}

// Test Case 1
console.log(decTobin(8))

// Test Case 2
console.log(decTobin(62))

// Test Case 3
console.log(decTobin(264))

// Test Case 4
console.log(decTobin(1023))