function birthday(s, d, m) {
    // Write your code here
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let arr = s.slice(i, i + m)
        // console.log(arr);


        if (arr.reduce((a, v) => a + v) === d) {
            count++
        }

    }

    // console.log(count);
    return count

}
console.log(birthday([1, 2, 1, 3, 2], 3, 2));