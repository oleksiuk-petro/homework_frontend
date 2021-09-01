/*
    3) Створити масив із 10 об’єктів Student {
                                        age: <some data> ,
                                        groupName: <some data>
                                    }
        а) створити окремий масив який матиме лише groupName для всіх об’єктів;
        б) порахувати сумарне значення age для всіх об'єктів;
        в) визначити чи є неповнолітні студенти в групі і вивести відповідне повідомлення.
        Пункти a,б,в - мають бути реалізованими через ФУНКЦІЇ.
*/

/* creating array with objects */

let classroom = [
    { age: 26, groupName: 'Java' },
    { age: 18, groupName: 'Front-end' },
    { age: 17, groupName: 'Python' },
    { age: 21, groupName: 'Front-end' },
    { age: 15, groupName: 'Java' },
    { age: 25, groupName: 'Front-end' },
    { age: 19, groupName: 'Front-end' },
    { age: 22, groupName: 'Java' },
    { age: 14, groupName: 'Front-end' },
    { age: 23, groupName: 'Java' }
];
console.log(classroom);

/* a) creating array with only groupName */

let arrGroupName = classroom.map(function (name) {
    return name.groupName;
});
console.log(arrGroupName);

/* б) calculating total age all students */

// creating array of ages
let classroomAge = classroom.map(function (name) {
    return name.age;
});
console.log(classroomAge);

// calculating total age
let totalAge = classroomAge.reduce(function (sum, current) {
    return sum + current;
});
console.log(totalAge);

/* в) detecting juvenile students */

function isJuvenile(number) {
    return number < 18;
}
let juvenileStudents = classroomAge.some(isJuvenile);
if (juvenileStudents)
    console.log('В класі є неповнолітні студенти!');
else
    console.log('В класі всі дорослі!');