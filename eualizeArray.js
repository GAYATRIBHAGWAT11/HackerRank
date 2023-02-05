function equalizeArray(arr) {
    // Write your code here

    let count = 1
    let max = 0;

    arr.sort((a, b) => a - b)

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) count++
        else {
            if (count > max) {
                max = count
            }
            count = 1
        }
    }
    return (arr.length - max)



}
console.log(equalizeArray([3,3,2,1,3]));