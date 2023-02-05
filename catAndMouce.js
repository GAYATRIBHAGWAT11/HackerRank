function catAndMouse(x, y, z) {
    let catA = Math.abs(x - z)
    let catB = Math.abs(y - z)

    if (catB < catA) {
        return " cat A"
    }
    else if (catB < catA) {
        return "cat B"
    }else{
        "Mouse C"
    }

}
console.log(catAndMouse(2, 5, 4));