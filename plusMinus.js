function plusMinus(arr) {
    // Write your code here
    let NCount = 0;
    let Pcount = 0;
    let Zcount = 0;

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < 0) {
            NCount++
        } else if (arr[i] > 0) {
            Pcount++
        } else {
            Zcount++
        }
    }
    let pos = (Pcount / arr.length).toFixed(6)
    let neg = (NCount / arr.length).toFixed(6)
    let zero = (Zcount / arr.length).toFixed(6)
    console.log(pos);
    console.log(neg);
    console.log(zero);
}
console.log(plusMinus([-4, 3, -9, 0, 4, 1]));