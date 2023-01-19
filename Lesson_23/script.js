 'use strict';
// Обработчик событий
// Событие - определённый сигнал от браузера, он сообщает нам, что что-то произошло.
// События происходят с объектами на странице.

//События:
// DOMContentLoaded - завершение загрузки DOM;
// click - клик (тап на сенсорных ус-вах);
// keydown - нажатие клавиши на клавиатуре;
// resize - изменение размеров документа;
// change - окончание изменения значения в поле вводаж
function sum(){
    const number1 = +document.querySelector('#number1').value; // знак + перед 'document' переводит 
    const number2 = +document.querySelector('#number2').value; // 'value 'из строки в число
    const sum = number1 + number2;
    document.querySelector('#answer').textContent = sum;
}

const btn = document.querySelector('#btn');
btn.onclick = function(){
console.log('Вы кликнули по кнопке!');
};

//событие без кнопки - изменение фона страницы по клику на пустую область:
// function changeBgColor(){
//     document.body.style.backgroundColor = `rgb(${Math.round(Math.random()*255)}, 
//     ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`;
// }
// document.onclick = changeBgColor;

// function message(){
//     //this - обращаемся к кнопке для которой вызван обработчик события
//     console.log(this.textContent);    
// }
// //получим кнопки и сохраним ссылки на них в переменную btns:
// const btns = document.querySelectorAll('button');
// //переберём кнопки и добавим к ним обработчик, используя onclick:
// btns.forEach(function(element){
// element.onclick = message;
// });

// const element = document.querySelector('#btn');
// console.log(element.onclick);

// const element = document.querySelector('#btn2');
// element.onclick = function(){
//     console.log(`id = ${this.id}`);    
// };
// //заменит предыдущий обработчик
// element.onclick = function(){
//     console.log(`text = ${this.textContent}`);
// };
// //addEventListener
// // element.addEventListener(event, handler,[, options]); 
// function changeBgColor(){
//     document.body.style.backgroundColor = "#3f51b5";
// }
// document.addEventListener('click', changeBgColor, false);
// document.removeEventListener('click', changeBgColor, false);

document.querySelector('.dropdown_trigger').onclick = function (){
    this.closest('.dropdown').classList.toggle('show');
};
//метод element.сlosest возвращает ближайший родительский элемент (или сам элемент),
// который соответствует заданному CSS-селектору
//или null, если таковых не обнаружено

//св-во classList возвращает псевдо массив DOMTokenList, содержащий все классы элемента

// toggle() - метод  DOMTokenList интерфейса. Удаляет данный token из списка
// и возвращает false. Если token не существует, он добавляется, и функция возвращает true