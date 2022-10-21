// Write a code find the 'longest string' from a list of strings.

function findLongestString(arr){
    let longest='';

    arr.forEach(element => {
        if(element.length !== undefined && element.length > longest.length){
            longest = element;
        }
    })

    return longest;
}

// Test Case 1
console.log(findLongestString(['I', 'love', 'my country', 'very', 'much']))

// Test Case 2
console.log(findLongestString(['testing']))

// Test Case 3
console.log(findLongestString(['']))

// Test Case 4
console.log(findLongestString([]))