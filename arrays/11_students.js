function studentNames(students) {
    const result = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].marks >= 70) {
            result.push(students[i].name);
        }
    }

    return result;
}
const students = [
    { name: 'Anu', marks: 80 },
    { name: 'Rahul', marks: 65 },
    { name: 'Meera', marks: 91 },
    { name: 'Vikram', marks: 72 },
];
//["Anu", "Meera", "Vikram"]
console.log(studentNames(students));
