
function saveThePrisoner(n, m, s) {
    // Write your code here

    let mod = (m % n)
    if (mod === 1) {
        return s;
    }

    if ((mod - 1 + s) === 0) {
        return n
    } else if ((mod - 1 + s) <= n) {
        return (mod - 1 + s)
    } else {
        return (mod - 1 + s) - n
    }

}
console.log(saveThePrisoner(4, 6, 2));