/*
    5.  В браузері, по кліку на кнопці, зробіть червоний фон для зовнішніх посилань (ті які містять протокол (`http://`, `ftp://`)), додавши їм клас external-red. Всі посилання без протоколу або які починаються з http://internal.com вважаються внутрішніми.
        <style>
            .external-red {
                background-color: red
            }
        </style>
        <a name="list">список</a>
        <ul>
            <li><a href="http://google.com">http://google.com</a></li>
            <li><a href="/tutorial">/tutorial.html</a></li>
            <li><a href="local/path">local/path</a></li>
            <li><a href="ftp://ftp.com/my.zip">ftp://ftp.com/my.zip</a></li>
            <li><a href="http://nodejs.org">http://nodejs.org</a></li>
            <li><a href="http://internal.com/test">http://internal.com/test</a></li>
        </ul>
*/
// full web-page loading
window.onload = function () {

    // setting id for first 'a'
    let nameReferenceA = document.getElementsByName('list');
    nameReferenceA[0].setAttribute('id', 'idForA');

    // mouse click event
    idForA.onclick = function () {
        // setting id for 'ul'
        let idForUl = document.querySelector('ul');
        idForUl.setAttribute('id', 'main-list');

        // finding all elements 'a' inside 'ul'
        let elementsList = document.getElementById('main-list');
        let elementsReference = elementsList.getElementsByTagName('a');

        // setting red color for references
        for (let i = 0; i < elementsReference.length; i++) {
            let httpBool = elementsReference[i].matches('a[href*="http"]');
            let ftpBool = elementsReference[i].matches('a[href*="ftp"]');
            let internalBool = elementsReference[i].matches('a[href*="internal"]');
            if ((httpBool || ftpBool) && !internalBool) {
                elementsReference[i].classList.add('external-red');
            }
        }
    }
}