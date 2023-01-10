'use strict';
function work(hour, minute){ // в скобках указываются параметры функции (при наличии) во время объявления данноц функции
    console.log(`Я закончил работу в ${hour} : ${minute}`);
}

work(17,30); // аргументы фунцкции (значения параметров) указываются в скобках при вызове функции

let a = 2;
let b = 3;
function ab(a, b){ //объявление функции 'ab' с переменными 'a' и 'b' в парметрах
    a = a + b;
    console.log(a); //значение 'a' в логах консоли будет равно 5
    let c = 7;  //объявление локальной переменной 'c' внутри функции
}
ab(a, b); //вызов функции 'ab'

console.log(a); // значение переменной 'a' в логах юудет равно 2, т.к. мы обращаемся к переменной напрямую - 
// без вызова функции, где вычислялось иное значение переменной 'a'
// console.log(c); // вызывает ошибку 'переменная необъявлена', т.к. 'c' существует только внутри функции 'ab'

function sum (x, y){
    return x + y;
}
const result = sum(4, 3);  //вызов функции 'sum' c аргументами '3' и '4', присвоение константе 'result' результата выполнения функции 'sum'
console.log(result); // выведет в кольцо число '7', т.к. это будет результатом выполнения функции

function sum2(a = 3){ // присвоение значения параметру функции
    console.log(a);
} 
sum2(); //вывод в логи значения '3'

// Стрелочные Функции

let work2 = (a) => console.log(a);  //краткая запись. Функция объявляется как переменная, инструкция для функции указывается после знака "=>"
work2("Привет"); //выведет в логи "Привет"

let work3 = (a, b) => a + b;
console.log(work3(2, 3)); //выведет в лог значение '5'

let work4 = (a) => {
    let result = a * a;
    console.log(result);
}
work4(3);