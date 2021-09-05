/*
    4.  Створіть меню, яке розкривається\згортається на сторінці в браузері при кліку на його заголовок.
        Наприклад :
        а) у розгорнутому вигляді
            - Університет:
            ---кафедра ІСМ
            ---кафедра ЕСМ
            ---кафедра політології
        б) у згорнутому вигляді
            - Університет
*/

let span = document.getElementById('spa');
let ul = span.nextSibling.nextSibling;
span.onclick = function () {
    if (span.classList.contains('menu') == false) {
        span.classList.add('menu');
        ul.style.display = 'block';
    } else {
        span.classList.remove('menu');
        ul.style.display = 'none';
    }
}