/*
    Написати код в якому:
    
    Реалізувати у функціональному та прототипному стилі наступне задання: 
    
    Створити клас Robot від якого унаслідувати класами CoffeRobot, RobotDancer, RobotCoocker його властивості. 
    В Robot створити метод work() , в якому слід описати роботу яку буде виконувати кожен з роботів. (тобто, work() повинен бути пронаслідуваний)

    • Для Robot метод work() повинен виводити текст «Я Robot – я просто працюю». 
    • Для CoffeRobot метод work() повинен виводити текст «Я CoffeRobot – я варю каву». 
    • Для RobotDancer метод work() повинен виводити текст «Я RobotDancer – я просто танцюю». 
    • Для RobotCoocker метод work() повинен виводити текст «Я RobotCoocker – я просто готую». 
    • Створити екземпляри вищеописаних класів і викликати до кожного з них метод work(). 
    • Створити масив типу Robot, заповнити масив екземплярами вищеописаних класів. 
    
    Циклом for пройтись по всіх елементах масиву і викликати в кожного метод work().
    
    Всі виводи проводити на консоль.
*/

function Robot(message) {
    this.message = message;
}
Robot.prototype.work = function () {
    console.log(this.message);
    return this.message;
};

function CoffeeRobot(message) {
    this.message = message;
}
CoffeeRobot.prototype = Object.create(Robot.prototype);

function RobotDancer(message) {
    this.message = message;
}
RobotDancer.prototype = Object.create(Robot.prototype);

function RobotCooker(message) {
    this.message = message;
}
RobotCooker.prototype = Object.create(Robot.prototype);

let robot = new Robot('Я Robot - я просто працюю');
let cofeeRobot = new CoffeeRobot('Я CoffeRobot – я варю каву');
let robotDancer = new RobotDancer('Я RobotDancer – я просто танцюю');
let robotCoocker = new RobotCooker('Я RobotCoocker – я просто готую');

let arrayRobot = new Array();

arrayRobot.push(robot);
arrayRobot.push(cofeeRobot);
arrayRobot.push(robotDancer);
arrayRobot.push(robotCoocker);

for (let i = 0; i < arrayRobot.length; i++) {
    arrayRobot[i].work();
}