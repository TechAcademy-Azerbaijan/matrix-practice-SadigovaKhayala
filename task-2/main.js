let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 1, 2, 3],
    [4, 5, 6, 7]
]
let r = 3
let c = 2
let arr=[];

for(i=0;i<r;i++){
    for(j=0;j<c;j++){
arr.push(matrix[i][j])
    }
   
    }

console.log(arr.join(' '))
