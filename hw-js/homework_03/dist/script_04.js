/*
    4.Створіть функцію filterRange (array, a, b), яка приймає масив чисел array і повертає новий масив, який містить тільки числа з array з діапазону від a до b → [a, b] - проміжки включаються.
*/

/* creating new array */
let array = [-9, -18, -1, -3, -5, 0, -3, 10, -1, 0, 1, 2, 11, 4, 5, 6];

/* creating a new function */
function filterRange(array, a, b) {
    let massif = [];
    for (let i = 0; i < array.length; i++) {
        if ((array[i] >= a) && (array[i] <= b))
            massif.push(array[i]);
    }
}

/* calling function */
let a = -3;
let b = 4;
filterRange(array, a, b);
