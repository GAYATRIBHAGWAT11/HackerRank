function minimumDistances(a) {
    // Write your code here
    let min = Number.MAX_VALUE;

    for (let i = 0; i < a.length - 1; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (min > Math.abs(i - j) && a[i] === a[j]) {
                min = Math.abs(i - j)
            }
        }
    }
    return min === Number.MAX_VALUE ? -1 : min


}
console.log(minimumDistances([7,1,3,4,1,7]));