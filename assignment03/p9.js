// https://www.hackerrank.com/challenges/time-conversion/problem

const timeConversion = function (s) {
    let day = s[8] === 'A' ? true: false;
    s = s.slice(0, 8);
    let hour = parseInt(s[0]+s[1]);
    if (hour < 12 && day == false) 
        hour += 12;
    if(hour == 12 && day == true)
        hour = 0;
    
    return (hour < 12 ? "0"+hour.toString():hour.toString()) +s.substring(2,8);
};

// Test Case 1
console.log(timeConversion("07:05:45PM"));

// Test Case 2
console.log(timeConversion("12:01:59AM"));

// Test Case 3
console.log(timeConversion("02:01:59AM"));
