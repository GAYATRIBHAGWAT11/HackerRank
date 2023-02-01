function countingValleys(steps, path) {
    // Write your code here
    let lvArr = [0];

    path.split("").forEach((el, idx) => {
        if (el === 'U') {
            lvArr.push(lvArr[lvArr.length - 1] + 1);
        } else {
            lvArr.push(lvArr[lvArr.length - 1] - 1);
        }
    })

    let valleys = 0

    for (let i = 1; i < lvArr.length; i++) {
        if (lvArr[i - 1] === -1 && lvArr[i] === 0) {
            valleys++
        }
    }
    return valleys;

}
console.log(countingValleys(8, 'UDDDUDUU'));