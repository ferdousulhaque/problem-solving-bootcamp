// https://www.hackerrank.com/challenges/sock-merchant/problem

const sockMerchant = (n, ar) => {
    if(ar.length == 1)
        return 0;
    
    let hashmap = new Map();
    let pairs = 0;

    for(const element of ar){
        if(!hashmap.has(element)){
            hashmap.set(element,1);
        }else{
            hashmap.delete(element);
            pairs++;
        }
    }
    return pairs;

}


// Test Case 1
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));


