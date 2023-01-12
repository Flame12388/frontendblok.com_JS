'use strict';
function calculateArea(r){
 let area;
 if(r <= 0){
     return 0;
 }else{
    area = Math.PI * r * r;
    return area;
 }
}
let radius = 2.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea.toFixed(1));

// Дана строка 'abc!def!'. Замените все ! на '@' 
// с помощью глобального поиска и замены.


let txt = 'abc!def!';
console.log(txt.replace(/!/g, "@"));

// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).
let txt2 = "aaa bbb ccc";
console.log(txt2.substr(4,3));
console.log(txt2.substring(4,7));
console.log(txt2.slice(4,7));

// Дана строка 'js'. Сделайте из нее строку 'JS'.
let txt3 = "js";
console.log(txt3.toUpperCase());

// Дана строка 'я люблю JS!'. Найдите количество 
// символов в этой строке.
let txt4 = "Я люблю JS";
console.log(txt4.length);

// Домашнее задание
// Выписать в комментариях. Вам необходимо найти все переменные,
// функции, аргументы и параметры.
// Запишите имена в соответсвующие пункты
// Переменные: years, myDog, guests.
// Функции: dogYears, makeTea, secret
// Встроенные функции: console.log();
// Аргументы: 'Rex', 4, 2, Earl Grey
// Параметры: dogname, age, cups, tea
// function dogYears(dogname, age){
//     let years = age * 2;
//     console.log(dogName + ' is ' + years + ' years old');
// }
// let myDog = 'Rex';
// dogYears(myDog, 4);

// function makeTea (cups, tea){
//     console.log('Breawing ' + cups + ' cups of' + tea);
// }
// let guests = 2;
// makeTea(guests, 'Earl Grey');

// function secret(){
//     console.log('The secret of life is 28');
// }
// secret();


// Дана строка 'JS'. Сделайте из нее строку 'js'.
let text = "JS";
console.log(text.toLowerCase());

// Дана строка 'я люблю JS!'. Вырежите из нее слово 
// 'люблю' и слово 'javascript' тремя разными способами 
// (через substr, substring, slice).
let text2 ="Я люблю javascript!";
console.log(text2.substr(2,5));
console.log(text2.substr(7,11));
console.log(text2.substring(2,7));
console.log(text2.substring(7,18));
console.log(text2.slice(2,7));
console.log(text2.slice(7,18));


// Дана строка 'я люблю JS!'. Найдите позицию 
// подстроки 'люблю'.

let text3 = 'я люблю JS!';
console.log(text3.search("люблю"));

// Дана переменная txt, в которой хранится какой-либо текст. 
// Реализуйте обрезание длинного текста по следующему 
// принципу: если количество символов этого текста больше 
// заданного в переменной n, то в переменную result запишем 
// первые n символов строки txt и добавим в конец 
// троеточие '...'. В противном случае в переменную 
// result запишем содержимое переменной txt.

let text4 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";
let n = 14;
let result;
if(text4.length > n){
    result = text4.substr(0, n) + "...";
}else{
    result = text4;
}
console.log(result);
// Для решения задач данного блока вам понадобятся следующие 
// методы: replace.
// Дана строка 'Я-люблю-JS!'. 
// Замените все  '-' на '!' с помощью глобального 
// поиска и замены.
let text5 = "Я-люблю-JS!";
console.log(text5.replace(/-/g,"!"));

// Дана строка 'я люблю JS'. С помощью метода split 
// запишите каждое слово этой строки в отдельный элемент 
// массива.
let text6 = 'я люблю JS';
console.log(text6.split(" "));

// Дана строка 'привет мир'. С помощью метода split 
// запишите каждый символ этой строки в отдельный элемент 
// массива.
let text7 = 'привет мир';
console.log(text7.split(""));
