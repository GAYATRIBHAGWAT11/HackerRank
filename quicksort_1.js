function quickSort(arr) {

    // console.log(pivot);

    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 0; i < arr.length-1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]

}
console.log(quickSort([4, 5, 3, 7, 2]));