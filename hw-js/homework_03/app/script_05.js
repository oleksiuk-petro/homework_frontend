/*
    5. Напишіть функцію camelize (str), яка перетворює такі рядки «my-short-string» в «myShortString». Тобто, дефіси видаляються, а всі слова після них отримують велику літеру.
*/

/*creating new sentence*/
var str = 'my-short-string';
console.log(str);

/*creating new function*/
function camelize(str) {
    /*creating array from string*/
    var array = str.split('-');
    console.log(array);

    /*growing the first letter*/
    for (i = 1; i < array.length; i++)
        array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
    console.log(array);

    /*creating new string from array*/
    var sentence = array.join('');
    console.log(sentence);
}

/*calling function*/
camelize(str);