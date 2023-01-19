'use strict';
// Задача №1
function button1Click(){
    let elem1 = document.getElementById('span1');
    elem1.innerHTML = "Ку-ку! А я " + "<b>" + "жирный" +"</b>" + "!";
}
//Задача №2
function button2Click(){
    let elem2 = document.getElementById('span2');
    elem2.innerHTML = "<h3>Абзац превратился в h3!</h3>";
}
//Задача №3
function button3Click(){
let elem3 = document.getElementById('span3');
elem3.outerHTML = "<h3>" + elem3.innerHTML + "</h3>";
}

//Задача №4
function button4Click(){
    // let sum = 0;
    let elem4 = document.getElementById('result');
    let elem41 = document.getElementById('input1');
    let elem42 = document.getElementById('input2');
    elem4.innerHTML = Number(elem41.value) + Number(elem42.value);
}

//Задача №5

function button5Click(){
    let elems = document.querySelectorAll('p');
    for(let i = 0; i < elems.length; i++){
        elems[i].innerHTML = i;
    }
}