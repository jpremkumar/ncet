// // variables
// var name = 'ncet';
// console.log(name);

// let age = 30;
// console.log(age);

// const city = 'bangalore';
// console.log(city);

// // city = 'mysore';


// // operators

// console.log(10 + 20);

// console.log("10" + 20);

// console.log("10" + "20");

// //object

// function addStudentParms(name, dept, college) {
//     console.log(name, dept, college);
// }

// addStudentParms('ncet', 'cse', 'ncet');

// let student = {
//     name: 'ncet',
//     dept: 'cse',
//     college: 'ncet'
// }

// function addStudent(student) {
//     console.log(student.name, student.dept, student.college);
// }

// addStudent(student);


// // array

// let students = ['ncet', 'cse', 'ncet'];
// students.forEach(stud => console.log(stud));

// // array object

// let studentList = [
//     {
//         name: 'Student1',
//         dept: 'cse',
//         college: 'ncet'
//     },
//     {
//         name: 'Student2',
//         dept: 'cse',
//         college: 'ncet'
//     },
//     {
//         name: 'Student3',
//         dept: 'alml',
//         college: 'ncet'
//     }
// ]

// console.log(studentList);

// studentList.forEach(stud => console.log(' foreach =>', stud.name, stud.dept, stud.college));


// const result = studentList.find(stud => stud.name === 'Student1');
// console.log('find =>', result);

// const filterREsult = studentList.filter(stud => stud.dept === 'cse');
// console.log('filter =>', filterREsult);

// const mapResult = studentList.map(stud => stud.name);
// console.log('map =>', mapResult);

// const mapResult2 = studentList.map(stud => {
//     return { name: stud.name }
// });
// console.log('map2 =>', mapResult2);

// // functions

// function add(a, b) {
//     return a + b;
// }

// var sub = function (a, b) {
//     return a - b;
// }

// var mul = (a, b) => {
//     return a * b;
// }


// console.log(add(10, 20));
// console.log(sub("10", 20));
// console.log(sub("sub ", 20));


const h1 = document.createElement('h1');
h1.textContent = 'hello world';
document.getElementById('app').appendChild(h1);