// https://www.hackerrank.com/challenges/drawing-book/problem

const pageCount = (n, p) => {
    let pageFromFirst = parseInt(p / 2);
    if(n % 2 == 0)
        n++;
    let pageFromEnd = parseInt(Math.abs(p - n)/2);
    return pageFromFirst < pageFromEnd ? pageFromFirst : pageFromEnd;
}

// Test Case 1
console.log(pageCount(12, 7));

// Test Case 2
console.log(pageCount(6, 2));

// Test Case 3
console.log(pageCount(6, 4));

// Test Case 4
console.log(pageCount(5, 3));

// Test Case 5
console.log(pageCount(5, 2));

// Test Case 6
console.log(pageCount(10000, 1001));


