function compareTriplets(a, b) {
let apoints=0
let bpoints=0;

for(let i=0;i<3;i++){
    if(a[i]> b[i]){
        apoints++
    }
    if(b[i]>a[i]){
        bpoints++
    }
}
return [apoints, bpoints]

}
console.log(compareTriplets([5,6,7], [3,6,10]));
