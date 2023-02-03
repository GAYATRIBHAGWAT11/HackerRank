
function hurdleRace(k, height) {
    // Write your code here
    let max = height.sort((a, b) => b - a)[0]
    return k > max ? 0 : max - k
}
console.log(hurdleRace(1, [1, 2, 3, 3, 2]));