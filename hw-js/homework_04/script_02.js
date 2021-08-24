/*
    1) Створити масив чисел,  де буде не менше 20 значень, серед них повиннні бути як позитивні так і негативні значення. Відсортувати даний масив:
        а) від найменшого до найбільшого;
        б) від найбільшого до найменшого.

    2) Відфільтрувати лише позитивні (із нулем )та лише негативні в окремі масиви.
*/

/*created an empty array*/
var arr = [];

/*write n random numbers [min;max]* inside array*/
let min = -50;
let max = 50;
let n = 20;
for (i = 0; i < n; i++) {
    min = Math.ceil(min);
    max = Math.floor(max);
    t = Math.floor(Math.random() * (max - min + 1)) + min;
    arr.push(t); //add to array
}
console.log(arr); //showin array’s elements

/*created two arrays*/
var arrNegative = [];
var arrPositive = [];

/*creating negative and positive arrays*/
for (i = 0; i < n; i++) {
    if (arr[i] < 0)
        arrNegative.push(arr[i]);
    else
        arrPositive.push(arr[i]);
}

/*showing two arrays*/
console.log(arrNegative);
console.log(arrPositive);