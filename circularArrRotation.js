function circularArrayRotation(a, k, queries) {
    // Write your code here
    let count = 0;
    let finalArr = []

    while (count <= k) {
        let lastElm = a.pop();
        a.unshift(lastElm)
        count += 1
    }
    for (let i = 0; i < queries.length; i++) {
        let el = a[queries[i]]
        finalArr.push(el)
    }
    return finalArr;


}
console.log(circularArrayRotation([3, 4, 5], 2, [1, 2]));