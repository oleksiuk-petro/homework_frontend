/*
    2.  Використовуючи JavaScript, зробіть так, щоб при кліці на кнопку на сторінці в браузері зникав елемент з id = "text". (Тобто потрібно спершу створити кнопку і елемент з id = "text").
*/

// creating button
let btn = document.createElement('button');
btn.innerHTML = 'Click me';
document.body.appendChild(btn);

// creating element with id="text"
let element = document.createElement('div');
element.innerHTML = 'Some text inside of div element.';
document.body.appendChild(element);
element.setAttribute('id', 'text');

// deleting element with id="text"
btn.onclick = function () {
    // document.body.querySelector('#text').remove();
    document.body.querySelector('#text').hidden = true;
};