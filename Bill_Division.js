function bonAppetit(bill, k, b) {
    // Write your code here
    let count=0;
    for(let i=0;i<bill.length;i++){
        count+=bill[i]
    }
    let constOfConsumedItems=count-bill[k];
    let isOverCharged=b-(constOfConsumedItems/2)
    if(!isOverCharged){
        console.log("Bon Appetit");
    }else{
        console.log(isOverCharged);
    }
}
console.log(bonAppetit([3,10,2,9], 4, 1));