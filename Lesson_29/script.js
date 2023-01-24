'use strict';
//Объект Date

// let now = new Date().toLocaleDateString(); //вывод текущей даты в местном формате.
// let now2 = new Date().toLocaleTimeString(); //вывод текущего времени по местному часовому поясу.
// let now3 = new Date().toLocaleTimeString().slice(0, -3); //вывод текущего времени в формате чч:мм. (обрезаем секунды)
// let now4 = new Date().toLocaleString();// вывод даты и времени в формате строки
// console.log(now);
// console.log(now2);
// console.log(now3);
// console.log(now4);

let date1 = new Date('05.11.2021');
console.log(date1);
let date2 = new Date('2015-02-24T21:23');
console.log(date2);
let date3 = new Date('2015-02-24T22:02+03:00');
console.log(date3);


let now = new Date();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();
let message = '';

if(hour <= 6){
    message = 'Доброе время суток';
}else if(hour <= 12){
    message = 'Доброе утро';
}else if(hour <= 18){
    message = 'Добрый день';
}else{
    message = 'Добрый вечер';
}

minute = (minute < 10) ? '0' + minute : minute; //форматирование с помощью тернарного оператора
second = (second < 10) ? '0' + second : second; //форматирование с помощью тернарного оператора
hour = (hour < 10) ? '0' + hour : hour; //форматирование с помощью тернарного оператора

message += ', сейчас ' + hour + ':' + minute + ':' + second;

console.log(message);

let days = ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'];
let now2 = new Date();
console.log('Сегодня ' + days[now2.getDay()]);
//Дата и время в формате ISO:

let newDate = new Date(2021, 3, 15, 18, 43, 59);
console.log(newDate.toString());
console.log(newDate.toDateString());
console.log(newDate.toTimeString());
console.log(newDate.toLocaleString());
console.log(newDate.toLocaleDateString());
console.log(newDate.toLocaleTimeString());
console.log(newDate.toUTCString());
console.log(newDate.toISOString());

let date11 = new Date('2015-04-02'); //дата в формате ISO
console.log(date11);
let date22 = new Date('2015-02-02T11:23'); //дата в формате ISO + время
console.log(date22);
let date33 = new Date('2015-02-02T11:02+03:00'); //дата в формате ISO + время + часовой пояс
console.log(date33);