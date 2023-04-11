// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const pascalsTriangle = function(numRows) {
    let ans = [[1]];
    for(i=0; i<numRows-1; i++){
        
        let temp = [];
        temp.push(0,ans[ans.length-1],0);
        temp = temp.flat();
        ref = [];
        for(j=0;j<temp.length-1;j++){
            ref.push(parseInt(temp[j])+parseInt(temp[j+1]));
        }
        ans.push(ref);
        
    }
    return ans;
};

// Test Case 01
console.log(pascalsTriangle(4));

// Test Case 02
console.log(pascalsTriangle(5));

// Test Case 03
