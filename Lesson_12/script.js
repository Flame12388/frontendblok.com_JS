'use strict';
//Строковые методы
let txt = "ABCDE";
console.log(txt.length); // метод вывода длины строки

let txt2 = "Меня зовут Николай";
console.log(txt2.indexOf("Николай"));  //метод вывода индекса первого вхождения выбранного текста в строке
console.log(txt2.lastIndexOf("Николай")); //метод вывода индекса последнего вхождения выбранного текста в строке
console.log(txt2.search("Николай")); //метод для поиска строки указанного значения и возврата строки элемента

// методы извлечения части строк
let txt3 = "Банан, яблоко, киви";
console.log(txt3.slice(7,13));
console.log(txt3.substring(7,13)); // работает аналогично методу slice, но не может работать с отрицательными значениями параметров. 
//Можно ввести только один параметр - начальную позицию для обрезки строки
console.log(txt3.substr(7,5)); // первый параметр указывает на начальную позицию для обрезки строки, второй - на количество символов в результате
//второй параметр можно опустить
//Replace
console.log(txt2.replace("Николай","Flame")); //метод чувствителен к регистру
console.log(txt2.replace(/НИКОЛАЙ/i,"Flame")); //но можно сделать так и будет работать =)
// оба метода заменяют только первое встретившееся совпадение
console.log(txt2.replace(/Николай/g, "Flame")); //данный способ позволяет заменить все совпадения
//uppercase, lowercase
console.log(txt3.toUpperCase()); //преобразует символы в верхний регистр, toLowerCase - наоборот в ннижний регистр
//concat - про конкатенацию =)
let txt4 = "Меня зовут:";
let txt5 = "Николай";
console.log(txt4.concat(" ",txt5));

//!!Строковые методы не изменяют исходные строки, они возвращают новые строки!!

//Методы извлечения строковых символов

console.log(txt3.charAt(0)); //Возвращает символ строки по заданному индексу
console.log(txt3.charCodeAt(0)); //Возвращает Unicode символа по заданному индексу в строке

//Split - преобразование строки в массив

console.log(txt3.split(" , "));

let num = 159;
console.log(num.toString()); //вернет 159 не числом, а строкой.

let num2 = 1.23456;
console.log(num2.toExponential(2)); //возвращает строкой округленное число (экспоненциальное значение)
console.log(num2.toFixed(3)); //возвращает округленное число с количеством указанных знаков после запятой
console.log(num2.toPrecision(4)); //возвращает округленное число

//valueOF
console.log(num2.valueOf()); //возвращает число не строкой, а числом

//Number 

console.log(Number(true)); //вернёт 1
console.log(Number(false)); //вернёт 0
console.log(Number('1')); //вернет число 1
console.log(Number(' 1')); //вернет число 1
console.log(Number('1 ')); //вернет число 1
console.log(Number(' 10   ')); //вернет число 10
console.log(Number("Николай")); //вернёт NaN
console.log(Number("1,23")); //вернёт NaN
console.log(Number("1.23")); //вернёт 1.23
console.log(Number("10  33")); //вернёт NaN

//parseInt - возвращает целое число, пробелы разрешены, возвращает только первое число

console.log(parseInt('10')); //вернет число 10
console.log(parseInt('10.33')); //вернет число 10
console.log(parseInt('10 20 30')); //вернет число 10
console.log(parseInt('10 years')); //вернет число 10
console.log(parseInt('years 10')); //вернёт NaN

//parseFloat - выводит первое число в строке, в т.ч. дробные числа
console.log(parseFloat('10')); //вернет число 10
console.log(parseFloat('10.33')); //вернет число 10
console.log(parseFloat('10 20 30')); //вернет число 10
console.log(parseFloat('10 years')); //вернет число 10
console.log(parseFloat('years 10')); //вернёт NaN

//minValue & maxValue
let min = Number.MIN_VALUE;
console.log(min);
let max = Number.MAX_VALUE;
console.log(max);

//NaN









