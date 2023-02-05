function viralAdvertising(n) {
    // Write your code here
    let cumulative = 0
    let shared = 5
    let liked

    for (let i = 0; i < n; i++) {
        liked = Math.floor(shared / 2)
        cumulative += liked
        shared = liked * 3
    }
    return cumulative;
}
console.log(viralAdvertising(3));