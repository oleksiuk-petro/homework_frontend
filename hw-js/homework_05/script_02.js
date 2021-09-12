/*
    2.  Реалізуйте метод buffer.clear(), який буде очищати поточний вміст буфера:
        
    function makeBuffer () {
        ... ваш код ...
    }

    var buffer = makeBuffer ();

    buffer.add("Тест");
    buffer.add("тебе не з'їсть");
    alert(buffer.print()); // Тест тебе не з'їсть
    buffer.clear ();
    alert (buffer.print()); // "" 
*/

function makeBuffer() {
    var text = '';

    function buffer(whichValue) {
        if (arguments.length == 0) { 
            return text;
        }
        text += whichValue;
    };

    buffer.clear = function () {
        text = '';
    };

    return buffer;
};

var myBuffer = makeBuffer();

myBuffer("Тест");
myBuffer(" тебе не з’їсть!");
console.log(myBuffer());

myBuffer.clear();
console.log(myBuffer());