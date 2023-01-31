'use strict';
//Классы
//Синтаксис класса:
// class myClass {
//     constructor(){...}
//     method1() {...}
//     method2() {...}
//     method3() {...}
//     ...
// }
//Пример:
class User {
    constructor(name) { //создаём функцию-конструктор класса
        this.name = name;
    }
    sayHi(){ //создаём функцию данного класса - метод класса
        alert(this.name);         
    }
}
let user = new User ('Nikolay'); //создаём новый Экземпляр класса
user.sayHi(); //вызываем метод класса для созданного экземпляра
// !!! Важно !!! нельзя вызвать метод класса без создания экземпляра класса и использования оператора 'new'

//Аналогичная запись данонго примера (без класса):
// function User(name){
//     this.name = name;
// }

// User.prototype.sayHi = function(){
//     alert(this.name);
// };
//Пример класса с геттером и сеттером (методы класса):
class User2 {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    //геттер:
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
     //cеттер:
     set fullName(newValue){
        [this.firstName, this.lastName] = newValue.split(' ');
     }

     ['test'.toUpperCase()](){
        console.log('PASSED!'); //Вычисляемое название метода
     }
     static createGuest() {
        return new User2("Гость","Сайта");
     }
}

let user2 = new User2('Nikolay','Workoff');
console.log(user2.fullName);
user2.fullName = "Andrey Makeenko";
console.log(user2.fullName);
user2.TEST();
let user3 = User2.createGuest();
console.log(user3.firstName);
console.log(User2.createGuest);

class Menu {
    static get elemClass(){
        return "menu";
    }
}
console.log(Menu.elemClass); //menu

//Наследование (extends) пример синтаксиса:
// class Child extends Parent {
//     ...
// }

class Animal {
    constructor(name){
        this.name = name;
    }
    walk(){
        alert(`I walk: ${this.name}`);
    }

}
class Rabbit extends Animal {
    walk(){
        super.walk(); //super - оператор для вызова конструктора родительского класса
        console.log("...and jump!");        
    }
}

new Rabbit("Nikolay").walk();

class Animal2 {
    constructor(name){
        this.name = name;
    }
}
class Rabbit2 extends Animal2 {
    constructor() {
        console.log(this); //вызовет ошибку, т.к. в дочернем классе вызов this возможен только после вызова super
        super();
    }
}
new Rabbit2();