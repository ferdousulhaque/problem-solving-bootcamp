array = [1, 2, 3]

// Accessories
const head = (array) => array[0];
const tail = (array) => array.slice(1, array.length);

// console.log(head(array));
// console.log(tail(array));

const map = (array, fun, store) => {
    if(array.length == 0){
        return store;
    }
    store.push(fun(head(array)));
    array = tail(array);
    return map(array, fun, store);
}

console.log(map(array, (x) => x * 2, []));