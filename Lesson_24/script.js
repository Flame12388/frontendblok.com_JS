'use strict';
//DOM
// DOM - объектная модель документа, которую создаёт браузер в памяти компьютера
// на основании HTML-кода, полученного им от сервера

//DOM API - нужен для того, чтобы с помощью JavaScript изменять страницу на лету, 
//т.е. делать её динамической и интерактивной

//Задание:
//Document - корень DOM-дерева. Является родителем для html.
//html - является потомком Document, так же является родителем для head и body.
//head и body  - являются между собой сиблингами, т.к. у них общий родитель - html.
//body является потомком html и родителем для h1 и div (первого уровня).
//h1 и div (первого уровня) являются потомками body. Так же являются сиблингами между собой.
//div (первого уровня) являются родителями для div (второго уровня) и h2.
//div (второго уровня) и h2 являются потомками div (первого уровня). Между собой являются сиблингами.
function func(){
    let elem = document.getElementById('elem');
    console.log(elem.dataset.price);
    console.log(elem.dataset.productNumber);
    //альтернативная запись:
    //console.log(elem.getAttribute('data-price'));
    //console.log(elem.getAttribute('product-number'));
}