// Given a sentence, keep the order of the words same, but reverse the characters of each word.
// For example, if the given sentence is: 'I love programming'
// The result should be: 'I evol gnimmargorp'

// Write a code find the 'longest string' from a list of strings.

function reverseChar(str){
    let revStr='';

    let splitArr = str.split(' ');

    splitArr.forEach(str => {
        for(let i=str.length-1; i>=0; i--){
            revStr += str[i];
        }
        revStr += ' ';
    })
    
    return revStr;
}

// Test Case 1
console.log(reverseChar('I love programming'))

// Test Case 2
console.log(reverseChar(''))

// Test Case 3
console.log(reverseChar('1'))