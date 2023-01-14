'use strict';
// МАССИВЫ

let array_name = ['item1', 'item2', 'item3']; // объявление массива

let cars = ["BMW","Toyota","Audi"];
console.log(cars[0]);

let currentUser = ["Nikolay","WorkOff", 34]; //Массив с данными
// let currentUser = { // Объект с теми же данными
// firstName: "Nikolay",
// lastName: "WorkOff",
// age: 34
// };
console.log(currentUser.length);
currentUser.push(170); // push - метод добавления нового элемента в массив
console.log(currentUser);
console.log(currentUser.toString()); // toString - метод преобразования массива в строку значений массива
console.log(currentUser.join(" + "));  // join - метод преобразования массива в строку значений массива с возможностью указать разделитель для элементов
// currentUser.pop(); //удаляет последний элемент массива
// console.log(currentUser);
// console.log(currentUser.pop()); //так можно посмотреть элемент массива, который будет удалён при использовании данного метода.
currentUser.shift(); //удаляет первый элемент массива (с индексом 0) и сдвигает все индексы на -1
console.log(currentUser);
currentUser.unshift("Николай"); // добавляет 1й (0-й) элемент в массив
console.log(currentUser);
// delete currentUser[0]; // метод удаляет элемент массива по указанному индексу, но длина массива остаётся прежней - удалённый элемент будет "empty"
// console.log(currentUser); 
currentUser.splice(2,0, 180, 8); // метод добавления элементов в массив. Первый аргумент указывает позицию, после которой будут добавлены новые элементы
// второй указывает сколько элементов будет удалено (0), оставшиеся два аргумента - это элементы, которые будут добавлены в указанную позицию.
console.log(currentUser);

// метод Concat - создаёт новый массив путём слияния существующих массивов.

let drive = currentUser.concat(cars); //создаём новый массив и помещаем в него элементы указанных массивов - кол-во массивов для слияния не ограничено
console.log(drive);
let newUser = currentUser.concat([170, 72]); // с помощью concat также можно добавлять в существующий массив новые элементы
console.log(newUser);

// Метод Slice - нарезает части массива в новый массив

let user1 = newUser.slice(0,2); // создаёт новый массив, обрезая элементы с 0 по 2. Исходный массив остаётся без изменений
console.log(user1);

// Метод Sort - сортирует массив таким образом, чтобы сначала выводились числовые значения

console.log(currentUser.sort());

// Метод Reverse - сортирует элементы массива в порядке обратном заданному (в порядке убывания)

console.log(currentUser.reverse());

let number = [2, 100, 25, 12, 45];
number.sort(function(a,b){ // данная функция позволяет методу sort отсортировать числовые элементы массива по порядку (возрастание)
    return a - b;          // для обратной сортировки нужно использовать "return b - a"
});
console.log(number);

number.sort(function(a,b){ // //--//--//
    return 0.5 - Math.random();          // сортировка элементов массива в случайном порядке.
});
console.log(number);




