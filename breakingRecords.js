function breakingRecords([hl,...scores]){
    let low=hl;
    let high=hl;
    let hRes=0;
    let lRes=0

    scores.map((val)=>{
        if(val<low){
            low=val
            lRes++
        }else if(val>high){
            high=val
            hRes++
        }
    })
    return [hRes, lRes]

}
console.log(breakingRecords([10,5,20,20,4,5,2,25,1]));