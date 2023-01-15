'use strict';
// Основы Объектно-Ориентированного Программирования (ООП)

class Person { //создаём класс Person
    constructor(firstName, lastName){  //с параметрами (свойствами) firstName и lastName, 
        //значения которых хранятся в this и задаются в конструкторе
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(){ // доступ к этим свойствам осуществляется через ф-ию getFullName
        return this.firstName + " " + this.lastName;
    }
}

let person = new Person("Nikolay", "Workoff"); //создаём новый экземпляр класса (присваиваем его переменной 'person')
console.log(person.getFullName()); //выводим в консоль созданный экземпляр класса
//также можно вывести в консоль только один из параметров класса:
console.log(person.firstName);


//Можно расширить возможности класса с помощью других классов (extends):

class User extends Person {
    constructor(firstName, lastName, email, password){
        super(firstName, lastName);
        this.email = email;
        this.password = password;
    }
    getEmail(){
        return this.email;
    }
    getPassword(){
        return this.password;
    }
}
// 
function App(){
    let user = new User ("Nikolay",
                         "Workoff",
                         "hostyleflame@gmail.com",
                         "123456789");
    user.getFullName();
    user.getEmail();
    user.getPassword();
    user.firstName;
    user.lastName;
    user.email;
    user.password;
}

let arr2 = [1,2,3];
arr2.forEach(e => console.log(e)); //вывод элементов массива по одному на каждой строке

// Array.prototype.partition = function(pred){
//     let passed = [];
//     let failed = [];
//     for(let i = 0; i< this.length; i++){
//         if(pred(this[i])){
//             passed.push(this[i]);
//         }else{
//             failed.push(this[i]);
//         }
//     }
//     return [passed, failed];
// }
// [1,2,3,4,5].partition(e => e <=3); //> [[1, 2, 3], [4, 5]]

//Литерал - один из способов создания объекта:
[1,2,3,4,5];

//Фабричная функция - функция, которая принимает несколько аргументов и возвращает
// новый объект, состоящий из этих аргументов:
Array(1,2,3,4,5);

//Object.create
let arr3 = Object.create(Array.prototype);
arr3.push(1);
arr3.push(2);
arr3.push(3);
arr3.push(4);
arr3.push(5);
arr3.hello = () => "hello";


// arr3.partition(e => e <=3); //вернет 1,2,3,4,5
// arr3.hello(); // вернет 'hello'
// let foo = [1,2,3]; //вернет ошибку
// foo.hello();//вернет  - !пересмотреть с этого момента!

//Полиморфизм:
function Maybe({data, status}){
    this.data = data;
    this.status = status;
}
Maybe.prototype.apply = function(f) {
    if (this.status){
        return new Maybe({data: f(this.data), status: this.status});
    }
    return new Maybe({data: this.data, status: this.status});
};

Maybe.prototype.getOrElse = function(msg) {
    if(this.status) return this.data;
    return msg;
}







