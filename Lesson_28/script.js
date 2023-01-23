'use strict';
//ClassList и делегирование событый
// // document.querySelector('#buttonId').addEventListener('click',()=> console.log('Клик!'));
// const buttons = document.getElementsByClassName('buttonClass');
//     for (const button of buttons){
//         button.addEventListener('click',() => console.log('Clicked!'));
//     }
// document.body.addEventListener('click', () => {
//     console.log('Body click event in capture phase');
// }, true);

// Вместо прикрепления обработчика событий на кнопку, мы делегировали его родительскому блоку 'buttons'
document.getElementById('buttons')
    .addEventListener('click', event => {
        if(event.target.className === 'buttonClass') {
            console.log('click');
        }
    });
    //вывод в консоль количества классов элемента 'elem'
    let elem = document.querySelector("#elem");
    let length2 = elem.classList.length;
     console.log(length2);

// Вывод в консоль всех классов элемента 'elem' в столбик
    let elem2 = document.querySelector("#elem");
    let classNames = elem.classList;

    for (let className of classNames) {
        document.write(className + '<br>');
    }

    //метод добавления классов в classList:
    let elem3 = document.querySelector('#elem');
    elem3.classList.add('kkk');
    //метод удаления класса из класслиста элемента:
    elem3.classList.remove('bbb');
    //проверка наличия класса у элемента:
    let contains = elem3.classList.contains('aaa'); 
    console.log(contains); //выводит true/false
    //Метод Toggle - добавляет элемент в classList, если его нет. И удаляет если он уже есть:
    elem3.classList.toggle('ccc');
    
