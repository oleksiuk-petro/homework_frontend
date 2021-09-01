/*
    1) Створити масив чисел, де буде не менше 20 значень, серед них повиннні бути як позитивні так і негативні значення. Відсортувати даний масив:
        а) від найменшого до найбільшого;
        б) від найбільшого до найменшого.

    2) Відфільтрувати лише позитивні (із нулем )та лише негативні в окремі масиви.
*/

/* created an empty array */

let arr = [];

/* write n random numbers [min;max]* inside array */

let min = -50;
let max = 50;
let n = 20;
for (let i = 0; i < n; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    t = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(t); // add to array
}

/* creating negative array */

let arrNegative = arr.filter(function (number) {
    return number < 0;
});

/* creating positive array */

let arrPositive = arr.filter(function (number) {
    return number >= 0;
});