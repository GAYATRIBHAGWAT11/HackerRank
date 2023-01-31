function chunkIt(array) {
    let final = []
    const chunkSize = 2;

    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize)
        final.push(chunk)
    }
    return final
}


function pageCount(n, p) {
    // Write your code here
    let ar = chunkIt(Array.from({ length: n + 1 }, (ele, i) => i))
    // console.log(ar);

    let countF = 0;
    let countB = 0

    for (let i = 0; i < ar.length; i++) {
        // console.log(ar[i].indexOf(p) > -1);
        if (ar[i].indexOf(p) > -1) {
            break
        }
        countF++

        // console.log(ar[ar.length - i - 1].indexOf(p) > -1);
        if (ar[ar.length - i - 1].indexOf(p) > -1) {
            break;
        }
        countB++
    }
    // console.log(countF);
    // console.log(countB);

    let final = Math.min(countF, countB);
    return final

}
console.log(pageCount(5, 3));