/*
	 3. Створіть функцію find (arr, value), яка шукає в масиві arr значення value і повертає його номер, якщо знайдено, або -1, якщо не знайдено.
*/

/* creating new array */
let arr = ['phone', 'bell', 'display', 'phone',
	'juice', 'notebook', 'bread', 'phone', 'ring', 'phone'];

/* creating new function */
function find(arr, value) {
	let isElemInArr = false;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== value) continue;
		isElemInArr = true;
		console.log('ordinal number of' + value + '\' is: ' + i);
	}

	if (sougthElemPos === 0) console.log(-1);
}

/* calling function with parameters */
let value = 'phone';
find(arr, value);