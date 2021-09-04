/*
    1.  Напишіть код, який:
        а) В браузері, на сторінці, заповнить кожен з трьох списків <ul>, кліком по кнопці, довільним текстом.
        б) На цій ж сторінці виведе кількість всіх елементів <li> всіх списків.
        HTML код списків:
        <ul>
            <li></li>
            <li></li>
        </ul>
        <br>
        <ul>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <br>
        <ul>
            <li></li>
        </ul>
*/

// for random text (size is 20 symbols)
function str_rand() {
    var result = '';
    var words = '0123456789 qwertyuiop asdfghjklz xcvbnmQWER TYUIOPASDF GHJKLZXCVBNM';
    var max_position = words.length - 1;
    for (i = 0; i < 20; ++i) {
        position = Math.floor(Math.random() * max_position);
        result = result + words.substring(position, position + 1);
    }
    return result;
}

// for click button
pressButton.onclick = function () {
    let elementsArray = document.getElementsByTagName('li');
    for (let i = 0; i < elementsArray.length; i++) {
        elementsArray[i].innerHTML = str_rand();
    }
}

// for showing number 'li' elements
let numbers = 0;
let elementsArray = document.getElementsByTagName('li');
for (let i = 0; i < elementsArray.length; i++) {
    numbers++;
}
console.log('Number \'li\' elements is: ' + numbers)