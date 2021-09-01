/*
    3) Напишіть функцію, яка прийматиме два числа і тип операції над ними (множення, ділення, додавання, віднімання). Передбачити відловлювання exceptions за умови некоретних вхідних даних.
*/

/* enter data (parameters of function in future) */
let a = prompt('Please, enter \'a\'!');
let b = prompt('Please, enter \'b\'!');
let symbol = prompt('Please, enter \'*\', \'/\', \'+\' or \'-\'!');

/* describe the function */
function forNumbers(x, y, sign) {
    // we are looking for an error in an incorrect mathematical operation
    try {
        let result = 0;

        switch (sign) {
            case '*': result = x * y;
                break;
            case '/': result = x / y;
                break;
            case '+': result = Number(x) + Number(y); // I had problem!
                break;
            case '-': result = x - y;
                break;
            default:
                throw Error('-> LOGOS: Operating sign is not correct!');
        }

        // we are looking for an error of incorrect numbers
        try {
            if (Number.isNaN(result)) {
                throw Error('-> LOGOS: Values are undefined!');
            }
        } catch (error) {
            console.log(error);
        }

        // output of the operation result (without mistakes)
        console.log(a + ' ' + symbol + ' ' + b + ' = ' + result);
    } catch (error) {
        console.log(error);
    }
}

/* call a function with parameters */
forNumbers(a, b, symbol);