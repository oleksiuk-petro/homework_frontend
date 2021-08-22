/*
    2) Користувач вводить число. Залежно від того чи воно додатнє, від’ємне, нуль вивести відповідне повідомлення.
*/

let n = prompt('Write your number!');
if (n < 0)
    console.log('n = ' + n + ' -> (n < 0)');
else if (n > 0)
    console.log('n = ' + n + ' -> (n > 0)');
else
    console.log('n = ' + n + ' -> (n = 0)');