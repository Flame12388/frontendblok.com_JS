'use strict';
// Используя литерал объекта создайте пустой объект cat.
// Добавьте свойство name со значением "Roxy".
// Добавьте свойство lags со значением 4.
// Добавьте свойство color со значением "grey".
// Добавьте свойство full name со значением "Roxy, красивая кошка".
// Выведите full name через console.log().
let cat = {}; // сщздаём ПУСТОЙ объект
cat.name = "Roxy";
cat.lags = 4;
cat.color = "grey";
cat["full name"] = "Roxy, красивая кошка."; //так оформляется параметр, состоящий из двух слов с пробелом между ними.
console.log(cat);
console.log(cat["full name"]); //выводится такой параметр подобным же образом
// Напишите функцию-конструктор Person, которая принимает два параметра: 
// name (имя) и age (возраст).
// С помощью оператора new создайте объект person_1, передающий в 
// функцию-конструктор аргументы: имя "Andrey" и возраст 28.
// Выведите свойства объекта person_1 через console.log().
// Добавьте к шаблону объекта Person свойство specialty с помощью 
// prototype. Значением свойства будет "менеджер".
// Выведите свойство specialty объекта person_1 через console.log().
function Person(name, age){
    this.name = name;
    this.age = age;
}
let person_1 = new Person('Andrey', 28);
console.log(person_1.name);
console.log(person_1.age);
console.log(person_1);

Person.prototype.specialty ="менеджер";
console.log(person_1.specialty);
// Используя литерал объекта создайте объект cat с тремя свойствами: 
// name, legs и color.
// С помощью Object.create() создайте объект kitten 
// объектом-прототипом которого будет cat.
// Выведите свойства объекта kitten через console.log().
let cat2 = {
name: "Мурка",
legs: 4,
color: "black"
};
let kitten = Object.create(cat2);
console.log(kitten.name);
console.log(kitten.legs);
console.log(kitten.color);

// Реализуйте класс Worker (Работник), который будет иметь следующие 
// свойства: name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). Также класс должен иметь метод 
// getSalary(), который будет выводить зарплату работника. Зарплата - 
// это произведение (умножение) ставки rate на количество отработанных 
// дней days.
class worker{ //создаём класс
    constructor(name, surname, rate, days){ //свойства класса
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){ //метод класса
        return this.rate * this.days;
    };
}
worker = new worker("Nikolay", "Workoff", 7000, 21); //создаём экземпляр класса
console.log(worker.name);
console.log(worker.surname);
console.log(worker.getSalary());

//Домашнее задание
// Создайте объект city1 (var city1 = {}), укажите у него свойства name ***
// (название города, строка) со значением «ГородN» и population ***
// (населенность города, число) со значением 10 млн.***

let city1 = {};
    city1.name = "ГородN";
    city1.population = 10000000;
    city1.getName = function(){
        return this.name;
    };
    city1.exportStr = function(){
        return "name=" + this.name + "\\" + this.population +"\\n";
    };
    city1.getCity = function(){
        return getObj();
    }
let city2 = {
    name: "ГородM",
    population: 1e6,
    getName(){
        return this.name;
    },
    exportStr(){
    return "name=" + this.name + "\\" + this.population +"\\n";
    },
    getCity(){
     }
    
};

let getObj = function(){
    return this;
};
console.log(`Первый город называется: ${city1.getName()}, Второй город называется: ${city2.getName()}`);
console.log(`Первый город : ${city1.exportStr()}, Второй город: ${city2.exportStr()}`);
console.log(`Проверка метода ${city1.getCity()}`)


// // Создайте объект city2 через нотацию {name: "ГородM", population: 1e6}. ***
// let city2 ={
// name: "ГородM",
// population: 1e6
// };
// 
//     return "name=" + this.name + "\\" + this.population +"\\n";
// };
// console.log(city2.exportStr());

// 
 

// Создайте у объектов city1 и city2 методы getName(), которые вернут  ***
// соответствующие названия городов. ***
 
// Создайте методы exportStr() у каждого из объектов. Этот метод должен ***
// возвращать информацию о городе в формате ***
// «name=ГородN\npopulation=10000000\n». Для второго города будет строка ***
// со своими значениями. Примечание: можно обращаться к каждому свойству 
// через цикл for/in, но методы объекта возвращать не нужно.

// Создайте глобальную функцию getObj(), которая возвращает this. ***
// А у каждого из объектов city1 или city2 метод getCity, который 
// ссылается на getObj. Проверьте работу метода. Примечание: к объекту 
// вызова можно обратиться через this..

// Создайте массив d1 с числовыми величинами 45,78,10,3.  
// Добавьте в массив d1 еще одно число ( d1[7] = 100). 
// Выведите в консоль весь массив и его элементы с индексами 6 и 7.
let d1 = [45,78,10,3];
d1[7]=100;
console.log(d1);
console.log(`6й элемент массива d1: ${d1[6]}, 7й элемент массива d1: ${d1[7]}`);

// Создайте массив d2 с числовыми величинами 45,78,10,3. 
// Посчитайте в переменную sum2 сумму чисел в нем, при помощи цикла for.
let d2 = [45,78,10,3];
let sum = 0;
for(let i = 0; i < d2.length; i++){
    sum = sum + d2[i];
}
console.log(sum);
// Создайте массив d3 с числовыми величинами 45,78,10,3. 
// Добавьте в массив d3 еще одно число (например, d[7] = 100) 
// Посчитайте в переменную sum3 сумму чисел в нем, при помощи цикла for/in.
let d3 = [45,78,10,3];
d3[7]=100;
let sum3 = 0;
let i = 0;
for (Array.keys in d3){
sum3 = sum3 + d3[i];
i++;
}
console.log(sum3);


// Создайте массив d4 с числовыми величинами 45,78,10,3. 
// Напишите функцию сортировки my(a,b), которая при вызове d4.sort(my) 
// отсортирует элементы массива по убыванию чисел. Вызовите d4.sort(my)
let d4 = [45,78,10,3];
let my = function(a,b){
    return 0.5 - Math.random();
};
d4.sort(my);
console.log(d4);
