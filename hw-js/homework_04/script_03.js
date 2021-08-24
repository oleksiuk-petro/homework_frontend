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

/*creating array with objects*/
var classroom = [
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

/*a) creating array with only groupName*/
function creatingNewArray(classroom) {
    let arrGroupName = [];
    for (i = 0; i < classroom.length; i++) {
        arrGroupName.push(classroom[i].groupName);
    }
    console.log(arrGroupName);
}
creatingNewArray(classroom);

/*б) calculating total age all students*/
function totalAge(classroom) {
    let summaAge = 0;
    for (i = 0; i < classroom.length; i++) {
        summaAge += classroom[i].age;
    }
    console.log('summaAge = ' + summaAge);
}
totalAge(classroom);

/*в) detecting juvenile students*/
function juvenileStudents(classroom) {
    let meaning = false;
    let k = 0;
    while (k < classroom.length) {
        if (classroom[k].age < 18) {
            meaning = true;
            break;
        }
        k++;
    }
    if (meaning)
        console.log('В класі є неповнолітні!');
    else
        console.log('В класі всі дорослі!');
}
juvenileStudents(classroom);

