// https://www.hackerrank.com/challenges/strange-advertising/problem

const viralAdvertising = function (n) {
    let shared,liked,cumulative = 0;

    shared = 5;

    for(let i=1;i<=n;i++){
        liked = parseInt(shared/2);
        shared = 3 * liked;
        cumulative += liked;
    }

    return cumulative;

}

// Test Case 1
console.log(viralAdvertising(5));

// Test Case 2
console.log(viralAdvertising(12));

// Test Case 3
console.log(viralAdvertising(4));