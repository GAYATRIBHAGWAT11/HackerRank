
function timeConversion(s) {
    // Write your code here

    let timeArr=s.split(":")

    let hr=timeArr[0]
    let min=timeArr[1]
    let sec=timeArr[2].replace(/[A-Z]/g, "");

    let test=s.includes("PM")
    if(!test && hr==="12"){
        return s.replace(/[A-Z]/g, "");
    }
    return `${Number(hr)+12}:${min}:${sec}`

}
console.log(timeConversion("07:05:45PM"));
