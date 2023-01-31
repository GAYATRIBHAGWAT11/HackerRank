function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b)
    let min = 0;
    let max = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        min+=arr[i]

    }
    for(let j=1;j<arr.length;j++){
        max+=arr[j]
    }
console.log(min, max);

}
console.log(miniMaxSum([1, 2, 3, 4, 5]));