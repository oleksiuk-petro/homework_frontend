/*
    5) Вивести 10 перших чисел з ряду Фібоначі (це коли перші два члени послідовності одиниці, а кожний наступний — сума значень двох попередніх чисел).
*/
let n = 10;

let a = 1;
console.log('i = 1: ' + a);

let b = 1;
console.log('i = 2: ' + b);

for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log('i = ' + i + ': ' + c);
}