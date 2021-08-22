/*
    4) Користувача просять ввеcти пароль. Нехай правильним паролем буде “pass123”. Є 3 варіанти розвитку подій :
        - користувач вводить правильний пароль, виводимо, що він авторизований
        - користувач вводить admin , виводимо, що він авторизований як адмін
        - користувач вводить щось інще - виводимо - неправильний пароль.
*/
let password = prompt('Please, enter your password:');
switch (password) {
    case 'pass123':
        console.log('Your password is true!');
        break;
    case 'admin':
        console.log('You are like \'admin\'!');
        break;
    default:
        console.log('Your password is false!');
        break;
}