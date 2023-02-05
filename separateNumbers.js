function separateNumbers(s) {
    if (s.length === 1 || s[0] === '0') {
        console.log("NO");
        return;
    }
    let digit = 1;
    let i = 0;
    let flag = 1;
    let final = 1;
    while (i < s.length - digit) {
        // console.log("a ,", s.substr(i, digit));
        // console.log("b ,", s.substr(i + digit, digit));
        // console.log("c ,", s.substr(i + digit, digit+1));
        var a = s.substr(i, digit);
        var b = s.substr(i + digit, digit);
        var c = s.substr(i + digit, digit + 1);
        if ((parseInt(a) + 1) === parseInt(c)) {
            b = c;
            digit++;
            i--;
        }
        if (sub(b, a) !== 1) {
            digit += 1;
            final = digit;
            i = 0;
            flag = 0;
        } else {
            flag = 1;
            i += digit;
        }
    }
    if (flag === 1)
        console.log("YES " + s.substr(0, final))
    else {
        console.log("NO")
    }
}
console.log(separateNumbers(101103));