/*
    3.  Створіть кнопку, при кліці на яку, вона буде приховувати сама себе.
*/

// creating button
let btn = document.createElement('button');
btn.innerHTML = 'Click me';
document.body.appendChild(btn);

// deleting element with id="text"
btn.onclick = function () {
    // document.body.querySelector('button').remove();
    document.body.querySelector('button').hidden = true;
};