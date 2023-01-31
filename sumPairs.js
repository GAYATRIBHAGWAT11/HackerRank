
let ar = [1, 3, 2, 6, 1, 2]
let n = ar.length;
function divisibleSumPairs(n, k, ar) {
    // Write your code here


    let count = 0;

    for (let i = 0; i < n; i++) {
        let ele = ar[i]
        // console.log(ele);

        for (let j = i + 1; j < ar.length; j++) {
            let arr = ar.slice(j, ar.length)
            // console.log(arr);

            if ((ele + arr[0]) % k === 0) {
                count++
            }
        }
    }
    // console.log(count);
    return count;

}
console.log(divisibleSumPairs(n, 3, ar));