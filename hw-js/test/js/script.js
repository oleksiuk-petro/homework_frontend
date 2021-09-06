let op;
let result = 0;

function func() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    switch (op) {
        case '+':
            result = num1 + num2;
            document.getElementById("result").innerHTML = result;
            break;
        case '-':
            result = num1 - num2;
            document.getElementById("result").innerHTML = result;
            break;
        case '*':
            result = num1 * num2;
            document.getElementById("result").innerHTML = result;
            break;
        case '/':
            result = num1 / num2;
            document.getElementById("result").innerHTML = result;
            break;
    }
}