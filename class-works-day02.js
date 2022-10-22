// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = function (steps, path){
    let level = 0,i=0;
    while(i < steps){
        if(path[i] === 'U')
            level++;
        else
            level--;
        i++;
    }
    return level;
}

// Test Case 1
console.log(countingValleys(8,'UDDDUDUU'));

// Test Case 2


// Test Case 3
