function diagonalDifference(arr) {
    // Write your code here

    let ltr=0;
    let rtl=0;

    for(let i=0;i<arr.length;i++){
        ltr=ltr+arr[i][i]
        rtl=rtl+arr[i][arr.length-i-1]
    }
    return Math.abs(rtl-ltr)

}
let arr= [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ];
console.log(diagonalDifference(arr));