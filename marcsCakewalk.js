function marcsCakewalk(calorie) {
    // Write your code here

    calorie = calorie.sort((a, b) => b - a)

    let count = 0

    for (let i = 0; i < calorie.lenth; i++) {
        count += (Math.pow(2, i) * calorie[i])
    }
    return count

}
console.log(marcsCakewalk([7, 4, 9, 6]));