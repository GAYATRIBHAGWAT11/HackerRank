function theLoveLetterMystery(s) {
    // Write your code here

    let i=0;
    let count=0;
    let  j=s.length;
    let  diff=0;


    while(i<j){
        if(s.charAt(i) !==s.charAt(j)){
            let diff=Math.abs(s.charAt(i).charCodeAt()-s.charAt(j).charCodeAt())
            console.log(diff);
            count+=diff
            // console.log(count);
        }
        i++
        j--
    }
    return count

}
console.log(theLoveLetterMystery("abc"));
// time complexity=O(n)