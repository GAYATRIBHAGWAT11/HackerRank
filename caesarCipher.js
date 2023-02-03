
function caesarCipher(s, k) {
    let alph = "abcdefghijklmnopqrstuvwxyz".repeat(10)
    let capAlph = alph.toLocaleUpperCase()

    let finalStr = "";


    for (let i = 0; i < s.length; i++) {
        let test = /[a-z]/.test(s[i])
        console.log(test);


        // lower
        if (/[a-z]/.test(s[i])) {
            finalStr = finalStr + alph[alph.indexOf(s[i]) + k]
            continue;

        }
        // upper
        if (/[a-z]/.test(s[i])) {
            finalStr = finalStr + capAlph[capAlph.indexOf(s[i] + k)];
            continue;
        }
        finalStr = finalStr + s[i]
    }


    return finalStr;


}
console.log(caesarCipher('middle-Outz', 2));