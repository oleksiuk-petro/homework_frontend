/*
    Реалізувати обробку таких подій (сценарій вибрати самостійно):
        ● onscroll
        ● onsubmit
        ● onreset
        ● oncontextmenu
        ● ondoubleclick
        ● onfocus
*/

function functionForOnscroll() {
    document.getElementById('forOnscroll').style.color = 'red';
}

function functionForOnsubmit() {
    alert('Server got your text!');
}

function functionForOnreset() {
    alert('Input field will be reset!');
}

function functionForOncontextmenu() {
    alert('Right-clicked inside the div-element!');
}

function functionForOndblclick() {
    document.getElementById('someMessage').innerHTML = "You recently have double-click on div-element!";
}

function fuctionForOnfocus(x) {
    x.style.background = 'orange';
}