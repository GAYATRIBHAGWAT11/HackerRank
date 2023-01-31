function migratoryBirds(arr) {
    // Write your code here

    arr.sort((a, b) => a - b);

    let final = Array.from({ length: 5 }, () => [])

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            final[0].push(1)
        }
        if (arr[i] === 2) {
            final[1].push(2)
        }
        if (arr[i] === 3) {
            final[2].push(3)
        }
        if (arr[i] === 4) {
            final[3].push(4)
        }
        if (arr[i] === 5) {
            final[4].push(5)
        }
    }
    // console.log(final.map((ele)=> ele.length));
    return final.map((ele) => ele.length).indexOf(Math.max(...final.map((ele) => ele.length))) + 1



}
console.log(migratoryBirds([1,4,4,4,5,3]));
