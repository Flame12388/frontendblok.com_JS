'use strict';
// Даны картинки. Привяжите к каждой картинке событие, чтобы по клику на 
//картинку console.log выводился ее src.
let elems = document.getElementsByTagName('img');
for(let i = 0; i < elems.length; i++){
    elems[i].onclick = func;
}
function func(){
    console.log(this.getAttribute('src'));
}
//Даны ссылки. Привяжите всем ссылкам событие - по наведению на ссылку в 
//атрибут title запишется ее текст
// let elems2 = document.querySelectorAll('a');
// for(let i = 0; i < elems2.length; i++){
//     elems2[i].addEventListener('mouseover', func2);
// }
// function func2(){
//     this.innerHTML = this.innerHTML + '(' + this.href + ')';
    
// }

//Привяжите всем ссылкам событие - по наведению на ссылку в конец ее 
//текста дописывается ее href в круглых скобках
let elems3 = document.querySelectorAll('a');
for(let i = 0; i < elems3.length; i++){
    elems3[i].addEventListener('mouseover', func3);
}
function func3(){
    this.innerHTML = this.innerHTML + '(' + this.href + ')';
    this.removeEventListener('mouseover', func3);
}
//Домашнее задание

//Привяжите всем инпутам следующее событие - по потери фокуса каждый 
//инпут выводит свое value в абзац с id="test"
// let dzElems = document.getElementsByTagName('input');
// let abzats = document.getElementById('test');
// for (let i = 0; i < dzElems.length; i++){
//     dzElems[i].addEventListener('blur', dzFunc);
// }
// function dzFunc(){
// abzats.innerHTML = this.value;
// }
// // Для всех инпутов сделайте так, чтобы они выводили свой value алертом 
// //при нажатии на любой из них, но только по первому нажатию. Повторное 
// //нажатие на инпут не должно вызывать реакции.
// let dzElems2 = document.getElementsByTagName('input');
// for (let i = 0; i < dzElems2.length; i++){
//     dzElems2[i].addEventListener('click', dzFunc2);
// }
// function dzFunc2(){
// alert(`Значение элемента равно: ${this.value}`);
// this.removeEventListener('click', dzFunc2);
// }
// // Даны абзацы с числами. По нажатию на абзац в нем должен появится 
// //квадрат числа, которое он содержит.
// let paragraphs = document.querySelectorAll('p');
// for(let i = 0; i < paragraphs.length; i++){
//     paragraphs[i].addEventListener('click', dzFunc3);
// }
// function dzFunc3(){
//     this.innerHTML = this.innerHTML * this.innerHTML;
// }
// Даны инпуты. Сделайте так, чтобы все инпуты по потери фокуса проверяли 
//свое содержимое на правильное количество символов. Сколько символов 
//должно быть в инпуте, указывается в атрибуте data-length. Если вбито 
//правильное количество, то граница инпута становится зеленой, если 
//неправильное - красной.


//Вот тут я прям вспотел! :D
let inputs = document.getElementsByTagName('input');
for(let i = 0; i < inputs.length; i++){    
    inputs[i].addEventListener('blur', dzFunc4);    
}
function dzFunc4(){
    //  console.log(this.value.length);
    //  console.log(this.dataset.length);
     if(this.value.length == this.dataset.length){
        this.style.borderColor= 'green';
     }else{
        this.style.borderColor= 'Red';
     }
 }