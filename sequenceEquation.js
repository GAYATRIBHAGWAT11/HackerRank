function permutationEquation(p) {
    // Write your code here

    let obj = {}

    for (let i = 0; i < p.length; i++) {
        obj[p[i]] = i + 1

    }
    let res = []
    for (let i = 0; i < p.length; i++) {
        res.push(obj[obj[i + 1]])
    }
    console.log(obj);
    return res

}
console.log(permutationEquation([5, 2, 1, 3, 4]));
