/*
	 1) Створіть порожній об'єкт user.
		  ● Додайте властивість name зі значенням ПИЛИП.
		  ● Додайте властивість surname зі значенням ШЕВЧЕНКО.
		  ● Поміняйте значення name на СЕРГІЙ.
		  ● Видаліть властивість name з об'єкта.
*/

/* creating a new empty object */
let user = {};

/* add property 'name' */
user.name = 'ПИЛИП';

/* add property 'surname' */
user.surname = 'ШЕВЧЕНКО';

/* change the value of 'name' */
user.name = 'СЕРГІЙ';

/* delete property 'name' of object 'user' */
delete user.name;