'use strict';
// Задача 1
// Запрограммируйте поведение кнопки по нажатию на нее (она меняет текст в 
// span)
function buttonClick(){
let elem = document.getElementById('elem');
elem.innerHTML = '1';
}
// Задача 2
// Запрограммируйте  поведение кнопки по нажатию на нее (она меняет span на тег b, 
// не изменяя при этом текст внутри тега)
function buttonClick2(){
    let elem2 = document.getElementById('elem2');
    elem2.outerHTML = '<b>' + elem2.innerHTML + '</b>';
}
// Задча 3
// Дан HTML код. Поменяйте содержимое абзацев на их порядковый номер в 
// коде.
function func(){
    let elems = document.getElementsByTagName('p');
    for(let i = 0; i < elems.length; i++){
        elems[i].innerHTML = i + 1;
    }
}
// }
// Задача 4
// Дан HTML код. Поменяйте содержимое элементов с классом "а" на их 
// порядковый номер в коде.
function func2(){
    let elems2 = document.getElementsByClassName('a');
    for(let i = 0; i < elems2.length; i++){
        elems2[i].innerHTML = i + 1;
    }
}
// Задача 5
// Дан HTML код. Поменяйте содержимое абзацев с классом "а" на их 
// порядковый номер в коде
function func3(){
    let elems3 = document.querySelectorAll('p.a2'); // в случае, когда необходимо изменить только 
    //определённые элементы с заданным классом - здесь: абзацы с классом 'a2', минуя заголовок
    for(let i = 0; i < elems3.length; i++){
        elems3[i].innerHTML = i + 1;
    }
}

//Домашнее задание
