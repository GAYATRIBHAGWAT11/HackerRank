function simpleArraySum(ar) {
    // (Write your code here
    let Result=ar.reduce((acc, curr)=>{
        return acc+curr
    })
    return Result;

}
console.log(simpleArraySum([1,2,3,4,10,11]));