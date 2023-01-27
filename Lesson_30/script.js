'use strict';
// setTimeout & setInterval

function myFunc(){
    console.log('after 4 seconds');
}
window.setTimeout(myFunc, 4000); //отложенный на 4 сек вызов функции myFunc
console.log('Hi');

function sayHello(name){
    console.log(`Привет, ${name}!`);
}
window.setTimeout(sayHello, 3000, 'Николай'); // передача в setTimeout ссылки на функцию sayHello
// с задержкой исполнения в 3 сек и аргументом 'Николай'
window.setTimeout(sayHello(), 3000); // передача в setTimeout РЕЗУЛЬТАТА ВЫПОЛНЕНИЯ функции sayHello,
// при этом задержка в 3 сек не срабатывает

//clearTimeout - отмена таймаута

// const timeoutId = window.setTimeout (() => {
// console.log('Message!');
// }, 4000);
// clearTimeout(timeoutId);

// let timeoutId = null;
//     function start(){
//         if(timeoutId){
//             return;
//         }
//         const startTime = new Date().getTime();
//         const run = () => {
//             const time = new Date().getTime()- startTime;
//             document.querySelector('.seconds').textContent = (time / 1000).toFixed(1);
//             timeoutId =window.setTimeout(run, 50);
//         };
//         run();
//     }
//     function stop(){
//         if(timeoutId){
//             clearTimeout(timeoutId)
//             timeoutId = null;
//         }
//     }

let timeoutId = null;
let hasStarting = false;
function startClock(){
    if(hasStarting){
        return;
    }
    hasStarting = true;
    const startTime = new Date().getTime();
    const run = () => {
        const time = new Date().getTime()- startTime;
        document.querySelector('#clock').textContent = (time / 1000).toFixed(1);
        timeoutId = window.setTimeout(run, 50);
    };
    run();
}
function stopClock(){
    if(timeoutId){
    clearTimeout(timeoutId)
    timeoutId = null;
    hasStarting = false;
    }
    }