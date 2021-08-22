/* 
    1) Користувач вводить число, а програма виводить суму всіх чисел від 0 до числа яке ввів користувач включно.Наприклад введене число 5 , програма має вивести : 1+2+3+4+5 = 15 
*/

let n = prompt('Write which number, where n >= 1!');
if (n >= 1) {
    summa = 0;
    for (i = 1; i <= n; i++) {
        summa = summa + i;
    } 
    console.log('summa = ' + summa);
}
else {
    console.log('Your number is wrong!')
}