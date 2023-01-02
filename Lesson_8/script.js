'use strict';
let year = 2023;
if(year == 2023) {                //скобка - условие, фигурная скобка - инструкция (инструкции).
    console.log(true);
    console.log("вы молодец!");
}else{
    console.log(false);
}

if (year < 2023) {
    console.log("Вы в прошлом");
}else if (year > 2023) {
    console.log("Вы в будущем");
}else{
    console.log("вы в настоящем");
}


let age = 18;
// let all;
// if (age >= 18){
//     all = true;
// }else{
//     all; = false;
// }
//далее сокращенная запись с использованием тернарного (условного) оператора "?"
// let all = (age >= 18)?true:false; - тернарный опретаор в данном примере можно опустить, т.к. выражение по умолчанию будет иметь булево значение -
// либо true, либо false
// console.log(all);
// let club = (age < 18) ? "Здравствуй, малыш!":
// (age == 18) ? "Проходи!":
// (age >= 100)? "Здравствуйте":"Какой необычный возраст!";
// console.log(club);
let club;
if (age < 18) {
    club = "Здравствуй, малыш!";
}else if (age == 18) {
    club = "Проходи!";
}else if (age > 100){
    club = "Здравствуйте!";
}
else{
    club = "Какой необычный возраст!";
}
console.log(club);