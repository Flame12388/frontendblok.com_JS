"use strict";
// Передача параметров по ссылке или по значению, операторы Spread и Rest

function change(x){
    x = 2 * x;
    console.log("x в change: ", x);
}
let y = 2;
console.log("y до change: ", y);
change(y);
console.log("y после change: ", y); //в данном примере занчение y не изменится, т.к. в функцию передаётся копия переменной, а не сама переменная


function transmut(user){
    user.name = "Anna";  //Данная функция изменит парметр "name" объекта "user", т.к. параметр передан по ссылке.Если же в теле функции прописать
    // сам объект и изменить его параметр, изменений не произойдёт.
}
let andrey = {
    name: "Andrey"
};

console.log("до transmut: ", andrey.name);
transmut(andrey);
console.log("после transmut: ", andrey.name + " (-_- )");

function change_1(array){
    array[0] = 8;           //массив изменится
}
function changeFull(array){
    array = [4, 5, 6];       //массив НЕ изменится
}
let number = [1, 2 ,3];
console.log("до change_1: ", number);
change_1(number);
console.log("после change_1: ", number);
changeFull(number);
console.log("после changeFull: ", number);

// Оператор Spread - '...' - склеивает массивы.

let log = function(a,b,c){
    console.log(a,b,c);
};
//log(...['spread', 'rest', 'operator']);
log.apply(null, ['spread','rest','operator']);

let arr = ['will', 'love'];
let arr2 = ['you', ...arr, 'spread', 'operator'];
console.log(arr2);

let birthday = [1988, 3, 12];
let day = new Date(...birthday);
console.log(birthday);

let log2 = function(a,b, ...rest){  //собирает в массив аргументы "rest", a и b выводятся строкой перед массивом.
    console.log(a, b, rest);

};
log2("Николай", "rest", "spread", "user");

let log3 = function(...args){
    console.log(args);

};
log3(1, 2, 3, 4, 5);








