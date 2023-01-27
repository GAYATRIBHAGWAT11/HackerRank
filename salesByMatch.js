
function sockMerchant(n, ar) {
    let pairs=0
   console.log(search);
   for(let sock of ar){
       if(search.has(sock)){
           pairs++
           search.delete(sock)
       }else{
           search.add(sock)
       }
   }
   return pairs
}
console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]));