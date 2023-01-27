function kangaroo(x1, v1, x2, v2) {
    // Write your code here

    if(x1>x2 && v1<v2){
        if((x1-x2)%(v2-v1)==0){
            return "YES"
        }else{
            return "NO"
        }
    }else if(x1<x2 && v1>v2){
        if((x2-x1)%(v1-v2)==0){
            return "YES"
        }else{
            return "NO"
        }
    }
    return "NO"
}
console.log(kangaroo(0,2,5,3));