/*
    1. У нас є масив products. Скільки в ньому елементів - не знаємо, але можемо прочитати з products.length Напишіть код для отримання останнього елемента products.
*/

var products = ['phone', 'book', 'pen', 'knife', 'dog',
    'rabbit', 'apple', 'diary', 'plant', 'lion', 'tiger'];
console.log(products);

let size = products.length;
console.log(products[size - 1]);