/*
    2. Створіть масив styles з елементами «Джаз», «Блюз». Додайте в кінець значення «Рок-н-Ролл». Замініть передостаннє значення на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини. Видаліть перше значення масиву і виведіть його на консоль. Додайте в початок значення «Реп» і «Реггі».
*/

/*crating new array*/
let styles = ['Джаз', 'Блюз'];
console.log(styles);

/*adding last element*/
styles.push('Рок-н-Ролл');
console.log(styles);

/*replacement of second last element*/
let t = styles.length - 2;
styles.splice(t, 1, 'Классика');
console.log(styles);

/*deleting and showing the first element*/
console.log(styles.shift());
console.log(styles);

/*adding the first and the second elements to array*/
styles.splice(0, 0, 'Реп', 'Реггі');
console.log(styles);