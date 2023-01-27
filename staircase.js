function staircase(n) {
    for (let i = 0; i < n; i++) {
        let string = ""
        for (let j = 0; j < n - i; j++) {
            string += " "
        }
        for(let k=0;k<i+1;k++){
            string+="#"
        }
        console.log(string);
    }
}
console.log(staircase(6));