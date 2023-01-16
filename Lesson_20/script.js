'use strict';
// Динамическая типизация

//Типизация - классификация информации. Статическая типизация - проверка типов на стадии компиляции.
// Динамическая -на стадии исполненияю
//JavaScript - язык со слабой типизацией.

console.log(typeof(2));
console.log(typeof(3.14));
console.log(typeof(NaN));

console.log(typeof("Nikolay"));
console.log(typeof(true));
console.log(typeof(false));

let a;
console.log(a);
console.log(typeof(a));

console.log(1 + '2');
console.log(1 * '2');
console.log(1 + 'true');
console.log(false - 1);

console.log(String(123112));
console.log(Number('258'));
console.log(Number('asdsada'));
console.log(Boolean(1));
console.log(String(true));

console.log( 12 == '12'); //true
console.log( 12 === '12'); //false