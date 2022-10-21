
const reverseString = (A) => {
    let strArr = A.split(' ');
    let revStr = '';
    
    for(let i=strArr.length-1; i>=0; i--){
        if(strArr[i].replace(/\s/g, '').length > 0)
            revStr += strArr[i].trim() + (i==0?'':' ');
    }
    
    return revStr;
}

// Test Case 1
console.log(reverseString('the sky is blue'));

// Test Case 2
console.log(reverseString('this is ib'));

// Test Case 3
console.log(reverseString('qxkpvo  f   w vdg t wqxy ln mbqmtwwbaegx   mskgtlenfnipsl bddjk znhksoewu zwh bd fqecoskmo'));