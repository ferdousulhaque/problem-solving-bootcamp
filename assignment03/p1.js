// https://leetcode.com/problems/roman-to-integer/

const romanToInt = function(s) {
    let valueHashmap = new Map();
    let intValue = 0;
    
    // Adding the values
    valueHashmap.set('I', 1);
    valueHashmap.set('V', 5);
    valueHashmap.set('X', 10);
    valueHashmap.set('L', 50);
    valueHashmap.set('C', 100);
    valueHashmap.set('D', 500);
    valueHashmap.set('M', 1000);

    for(let i=0; i<s.length; i++){
        if(s[i] === 'I' && s.length > 1){
            // Check next
            if(s[i+1] === 'V')
            {
                intValue += 4;
                i++;
            } else if(s[i+1] === 'X'){
                intValue += 9;
                i++;
            } else{
                intValue += valueHashmap.get(s[i]);
            }
        }
        else if(s[i] == 'X' && s.length > 1){
            // Check next
            if(s[i+1] == 'L')
            {
                intValue += 40;
                i++;
            } else if(s[i+1] == 'C'){
                intValue += 90;
                i++;
            } else{
                intValue += valueHashmap.get(s[i]);
            }
        }
        else if(s[i] == 'C' && s.length > 1){
            // Check next
            if(s[i+1] == 'D')
            {
                intValue += 400;
                i++;
            } else if(s[i+1] == 'M'){
                intValue += 900;
                i++;
            } else{
                intValue += valueHashmap.get(s[i]);
            }
        }
        else{
            intValue += valueHashmap.get(s[i]);
        }
    }
    return intValue;
};

// Test Case 1
// 3
console.log(romanToInt("III"));

// Test Case 2
// 58
console.log(romanToInt("LVIII"));

// Test Case 3
// 1994
console.log(romanToInt("MCMXCIV"));

// Test Case 4
// 4
console.log(romanToInt("IV"));

// Test Case 5
// 42
console.log(romanToInt("XLII"));

// Test Case 5
// 900 + 10 + 9 + 100 = 1019
console.log(romanToInt("CMXIXC"));