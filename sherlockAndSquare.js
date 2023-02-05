function squares(a, b) {
    // Write your code here

    let lower = Math.ceil(Math.sqrt(a))
    let higher = Math.floor(Math.sqrt(b))

    if (lower > higher) {
        return 0
    }

    let count = 0

    for (let i = lower; i <= higher; i++) {
        if (lower <= i * i <= higher) {
            count++
        }
    }
    return count

}
console.log(squares(24, 49));