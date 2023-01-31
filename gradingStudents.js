
function gradingStudents(grades) {
    // Write your code here

    return grades.map(ele => {
        if (ele < 38) {
            return ele
        }
        if (Math.floor(ele / 5) * 5 + 5 - ele < 3) {
            return Math.floor(ele / 5) * 5 + 5
        }

        return ele;
    })

}
console.log(gradingStudents([73,67,38,33]));
