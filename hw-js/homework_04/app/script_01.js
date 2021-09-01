/*
    1) Створити масив чисел, де буде не менше 20 значень, серед них повиннні бути як позитивні так і негативні значення. Відсортувати даний масив:
        а) від найменшого до найбільшого;
        б) від найбільшого до найменшого.
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
    arr.push(t); //add to array
}
console.log('arr[]:                      ' + arr); //showin array’s elements

/* sorting from the lowest to the biggest */

arr.sort((a,b) => (a - b));
console.log('sorted by growing arr[]:    ' + arr);

/* sorting from the biggest to the lowest */

arr.sort((a,b) => (b - a));
console.log('sorted by decreasing arr[]: ' + arr);