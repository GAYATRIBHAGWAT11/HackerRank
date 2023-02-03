function minimumAbsoluteDifference(arr) {
    // Write your code here
    arr = arr.sort((a, b) => a - b)

    let min = Number.MAX_VALUE;

    for (let i = 1; i < arr.length; i++) {
        if (min > Math.abs(arr[i - 1] = arr[i])) {
            min = Math.abs(arr[i - 1] - arr[i])
        }
    }

}
console.log(minimumAbsoluteDifference([1, -3, 71,68,17]));