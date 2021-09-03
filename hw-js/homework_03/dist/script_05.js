/*
	 5. Напишіть функцію camelize (str), яка перетворює такі рядки «my-short-string» в «myShortString». Тобто, дефіси видаляються, а всі слова після них отримують велику літеру.
*/

/* creating new sentence */
let str = 'my-short-string';

/* creating a new function */
function camelize(str) {
	/* creating an array from string */
	let array = str.split('-');

	/* growing the first letter */
	for (let i = 1; i < array.length; i++)
		array[i] = array[i][0].toUpperCase() + array[i].slice(1);

	/* creating a new string from array */
	array.join('');
}

/* calling the function */
camelize(str);