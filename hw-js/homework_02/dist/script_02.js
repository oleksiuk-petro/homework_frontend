/*
    2) Є об'єкт employeeSalaries із зарплатами працівників. Напишіть код, який виведе суму всіх зарплат працівників. Якщо об'єкт порожній, то результат повинен бути 0.
*/

/*creating a new object*/
var employeeSalaries = {
    firstWorker: 100,
    secondWorker: 200,
    thirdWorker: 300
}

/*calculating of summa*/
let summa = 0;
let objectSize = Object.keys(employeeSalaries).length;
if (objectSize != 0) {
    for (var key in employeeSalaries)
        summa += employeeSalaries[key];
}
else
    summa = null;

/*output meaning of summa*/
console.log('summa = ' + summa);