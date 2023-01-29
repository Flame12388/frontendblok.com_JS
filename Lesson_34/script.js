'use strict';
// функция-конструктор и метод this
function User(name){ // !!!ВАЖНО!!!  - функция-конструктор пишется с Заглавной буквы.
    this.name = name;
    this.isAdmin  = false;
    }

 let user = new User('Nikolay'); //создаётся новый пустой объект и он присваивется this

console.log(user.name);
console.log(user.isAdmin);

//Подробный разбор примера:
// function User(name){ 
//     //this ={}; (неявно)
//     //добавляет свойства к this
//     this.name = name;
//     this.isAdmin  = false;
//     //return this; (неявно)
//     }

//     let user = {
//         name:'Nikolay',
//         isAdmin: false
//     };

let user2 = new function(){  // такой конструктор не может быть вызван дважды, т.к. он нигде не сохраняется.
    this.name = "Nikolay";
    this.isAdmin = false;
};

//можно проверить была ли функция вызвана с помощью 'new':

function User3(){
    console.log(new.target);
}
 User3(); // Обычный вызов. Вернёт undefined
 new User3(); // Вызов в режиме конструктора. Вернёт ƒ User3(){
              //     console.log(new.target);
              // }

function User4(name){ //использование функции конструктора без оператора 'new'
    //не самый удачный способ, т.к. отсутствие 'new' может ввести разработчика в заблуждение.
    if(!new.target){
        return new User4(name);
    }
    this.name = name;
}

let nikolay = User4('Nikolay');
alert(nikolay.name);

function BigUser(){
    this.name = "Nikolay";

    return {name: "Cat" };
}
console.log(new BigUser().name); //вернёт 'Cat'

function SmallUser(){
    this.name = "Nikolay";

    return;
}
console.log(new SmallUser().name); //вернёт 'Nikolay'

//Использование конструкторов для создания объектов:

function User5(name){
    this.name = name;

    this.SayHi = function(){
        console.log("Меня зовут: " + this.name);
    };
}
let nikolay2 = new User5("Николай");
nikolay2.SayHi();

//this:

let user6 = {name:"Anna"};
let admin = {name: "Nikolay"};

function sayHi(){
    console.log(this.name);    
}

user6.f =  sayHi; //this внутри функции является ссылкой на объект, который указан перед '.' - (user)
admin.f = sayHi; //this внутри функции является ссылкой на объект, который указан перед '.' - (admin)
user6.f(); //значение this внутри функции sayHi будет равно пармаметру Объекта, а именно: user6.name ('Anna')
admin.f(); //значение this внутри функции sayHi будет равно пармаметру Объекта, а именно: admin.name ('Nikolay')
admin['f'](); //значение this внутри функции sayHi будет равно пармаметру Объекта, а именно: admin.name ('Nikolay')


// !!!!!!!!!!! ВАЖНО !!!!!!!!!!!!!!!!
// Функция, которая находится в объекте в качестве его свойства называется методом.
        //методы позволяют объектам действовать - object.doSomething()
        //методы могут ссылаться на объект через this
        //Значение this определяется во время исполнения кода

// !!!!!!!!!!! ВАЖНО !!!!!!!!!!!!!!!!

//Стрелочная  функция не имеет своего this, но может использовать this других не стрелочных функций:
let user7 = {
    firstName: 'Andrey',
    sayHi(){ 
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};
user7.sayHi();// выведет  'Andrey'. Использование стрелочной функции 
//может быть полезно, когда нам нужно взять значение this из окружающего контекста