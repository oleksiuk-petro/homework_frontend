/*
    4.Створіть функцію filterRange (array, a, b), яка приймає масив чисел array і повертає новий масив, який містить тільки числа з array з діапазону від a до b → [a, b] - проміжки включаються.
*/

/*creating new array*/
var array = [-9, -18, -1, -3, -5, 0, -3, 10, -1, 0, 1, 2, 11, 4, 5, 6];
console.log(array);

/*creating new function*/
function filterRange(array, a, b) {
    let massif = [];
    for (i = 0; i < array.length; i++) {
        if ((array[i] >= a) && (array[i] <= b))
            massif.push(array[i]);
    }
    console.log(massif);
}

/*calling function*/
let a = -3;
let b = 4;
filterRange(array, a, b);
