/*
    2) Є об'єкт employeeSalaries із зарплатами працівників. Напишіть код, який виведе суму всіх зарплат працівників. Якщо об'єкт порожній, то результат повинен бути 0.
*/

/* creating a new object */
let employeeSalaries = {
    firstWorker: 100,
    secondWorker: 200,
    thirdWorker: 300
}

/* output values of 'user' */
for (let key in employeeSalaries)
    console.log(key + ': ' + employeeSalaries[key])

/* calculating of summa */
let summa = 0;
let objectSize = Object.keys(employeeSalaries).length;
if (objectSize != 0) {
    for (let key in employeeSalaries)
        summa += employeeSalaries[key];
}
else
    summa = null;

/* output meaning of summa */
console.log('summa = ' + summa);