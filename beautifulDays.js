function beautifulDays(i, j, k) {
    // Write your code here
    let sum = 0;

    for (let p = i; p <= j; p++) {
        let r = (p + "").split('').reduce((reversed, character) => character + reversed)
        if (Math.abs(p - parseInt(r)) % k === 0)
            sum++

    }
    return sum;

}
console.log(beautifulDays(20, 23, 6));