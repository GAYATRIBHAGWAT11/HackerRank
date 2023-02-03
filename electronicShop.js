function getMoneySpent(keyboards, drives, b) {
    let min=0;

    keyboards.forEach(x=>{
        drives.forEach(y=>{
            if(x+y > min && x+y <=b){
                min=x+y
            }
        })
    })
    return min === 0? -1 : min
}
console.log(getMoneySpent([40, 50, 60], [5,8,12], 60));