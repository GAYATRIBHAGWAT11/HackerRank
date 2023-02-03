function minimumNumber(password) {
    let N = password.length;

    const numbers = "0123456789"
    const lower_case = "abcdefghijklmnopqrstuvwxyz"
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const special_char = "!@#$%^&*()-+"

    let strongPass = password;
    let addCount = 0;


    let regNumTest = /\d/.test(password)
    console.log("regNumTest:", regNumTest);


    if (!regNumTest) {
        strongPass = strongPass + "1"
        addCount++
    }


    let regCapTest = /[A-Z]/.test(password)
    console.log(regCapTest);


    if (!regCapTest) {
        strongPass = strongPass + "A"
        addCount++
    }

    // test for symbol

    let regSymTest = /[!@#$%^&*(\)\-\+]/.test(password)

    if (!regSymTest) {
        strongPass = strongPass + "*"
        addCount++
    }

    let lengthDif = 6 - strongPass.length;


    if (lengthDif > 0) {
        strongPass = strongPass + numbers.slice(0, lengthDif)
        addCount = addCount + lengthDif;
    }

    return addCount;


}
console.log(minimumNumber( '#HackerRank'));