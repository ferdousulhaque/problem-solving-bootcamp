// Discussion on Loop Manipulations

// let n = 5;
// let pr = '';

// for(let i=0; i<5; i++){
//     for(let j=0; j<i; j++)
//         pr += "*";
//     console.log(pr);
// }


// Discussion on 2D Dimensions

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

(function (matrix){
    for(let i=0; i<matrix.length; i++){
      for (let j = 0; j < matrix.length; j++) {
        // console.log(matrix[j][i]);
        process.stdout.write(`${matrix[j][i]},`);
      }
    }
})(matrix);