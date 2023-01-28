function superReducedString(s) {
let i=1;
let array=s.split('')
if(s===" "){
    return "Empty String"
}
while(i<array.length){
    if(array[i-1] == array[i]){
        array.splice(i,1)
        array.splice(i-1,1)
        i=0
    }
    i++
}
return array.length ? array.join(''): "empty string"
}
console.log(superReducedString("aaabccddd"));