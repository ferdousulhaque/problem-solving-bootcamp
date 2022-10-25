// https://www.hackerrank.com/challenges/counting-valleys/problem

const countingValleys = function (steps, path){
    let level = 0, valleys = 0;

    for(let i=0; i<steps; i++){
        if(path[i] == 'U')
            level++;
        else
            level--;

        if(level==0 && path[i] == 'U')
            valleys += 1;
    }

    return valleys;
}

// Test Case 1
console.log(countingValleys(8,'UDDDUDUU'));

// Test Case 2
console.log(countingValleys(8,'DDDDUUUU'));