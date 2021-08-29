/*
    1) Створіть порожній об'єкт user.
        ● Додайте властивість name зі значенням ПИЛИП.
        ● Додайте властивість surname зі значенням ШЕВЧЕНКО.
        ● Поміняйте значення name на СЕРГІЙ.
        ● Видаліть властивість name з об'єкта.
*/

/*creating a new empty object*/
var user = {
};

/*add property 'name'*/
user.name = 'ПИЛИП';

/*add property 'surname'*/
user.surname = 'ШЕВЧЕНКО';

/*output values of 'user'*/
console.log('beginning');
for (var key in user) {
    console.log('Ключ: ' + key + '. Значення: ' + user[key]);
}

/*change the value of 'name'*/
user.name = 'СЕРГІЙ';

/*output values of 'user'*/
console.log('\nafter changing');
for (var key in user) {
    console.log('Ключ: ' + key + '. Значення: ' + user[key]);
}

/*delete property 'name' of object 'user'*/
delete user.name;

/*output values of 'user'*/
console.log('\nafter deleting');
for (var key in user) {
    console.log('Ключ: ' + key + '. Значення: ' + user[key]);
}