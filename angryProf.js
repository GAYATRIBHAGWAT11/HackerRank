function angryProfessor(k, a) {
    // Write your code herelet 

    let inClassCount = 0
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) inClassCount++
    }
    if (inClassCount >= k) return "NO"
    return "YES"


}
console.log(angryProfessor(3, [-1, -3, 4, 2]));