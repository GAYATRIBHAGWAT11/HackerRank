function bigSorting(unsorted) {
    // Write your code here

    return unsorted.sort((a, b) => {
        if (a.length != b.length) return a.length - b.length;

        for (let i = 0; i < a.length; i++) {
            let left = a[i]
            let right = b[i]

            if (left != right) return left - right

        }
        return 0;
    })

}
console.log(bigSorting(["1", "200", "150", "3"]));