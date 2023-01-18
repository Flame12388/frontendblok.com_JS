//Работа с формами

//getElementById - получение одного элемента страницы html по его идентификатору (id)
'use strict';
// let elem = document.getElementById('test'); //получениe элемента из родительского html 
// //и присвоение его переменной 'elem'
// console.log(elem);
// elem.innerHTML = '<strong>1</strong>'; //внесение изменений в полученный элемент
// console.log(elem);
//getElementsbyTagName  - получает группу тегов по их имени (блоки, абцацы, заголовки ит.д.)

let elems = document.getElementsByTagName('p'); //получение всех абзацев на смтранице (в массив, коллекцию)
console.log(elems);

//вносим изменения в полученные элементы:
elems[0].innerHTML = '1';
elems[1].innerHTML = '2';
elems[2].innerHTML = '3';

let elems2 = document.getElementsByTagName('p');
for(let i = 0; i<elems.length; i++){
    elems[i].innerHTML = '1';
}
//Элементы body, head можно получить так: document.body, document.head

// document.forms[0].innerHTML = '!';

// document.forms.forma1.innerHTML = '!!';
// document.forms['forma2'].innerHTML = '??';

document.forms[1].elements[0].value ='1111';

let elem2 = document.getElementById('test2');  //получаем элемент по id
elem2.setAttribute('value', '777'); //меняем аттрибут 'value' у полученного элемента
console.log(elem2.hasAttribute('value'));
console.log(elem2.getAttribute('value'));
elem2.removeAttribute('value', '777'); //меняем аттрибут 'value' у полученного элемента
console.log(elem2.getAttribute('value'));

let elems3 = document.getElementsByClassName('abz');
for(let i = 0; i < elems3.length; i++){
    elems3[i].innerHTML = "171";
}
let elem4 = document.querySelector("input.test3"); //!!!возможна краткая запись без 'input' - .test3 (для классов),
// #test3 (для id)
console.log(elem4.getAttribute('value'));
console.log(elem4);

let elems4 = document.querySelectorAll('.abz');
for(let i = 0; i < elems4.length; i++){
    elems4[i].innerHTML = '111';
}
///      !!! ВАЖНО !!!
/// разница между присвоением значения аттрибута через value = '' и setAttribute;
let elem5 = document.getElementById('test4');
// elem5.value = '2'; //значение меняется на страницe, но в консоли отобразится прежнее значение,
// полученное из html-страницы:
console.log(elem5.getAttribute('value'));
elem5.setAttribute('value', '323');//значение меняется везде
console.log(elem5.value);
