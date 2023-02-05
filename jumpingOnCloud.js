function jumpingOnClouds(c, k) {
    let jump = 0
    let cost = 100

    while (jump < c.length) {
        if (c[jump] === 1) {
            cost = cost - 1 - 2
        } else {
            cost = cost - 1
        }
        jump += k
    }
    return cost;

}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));