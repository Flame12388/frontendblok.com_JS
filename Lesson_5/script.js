console.log(2*3);
let i = 2;
i = -i;
console.log(i);
let x = 2, y = 3;
console.log(y-x);
console.log(5%2); // "%" - оператор взятия остатка от деления операндов "5" и "2" (5/2=4 + остаток - 1)
console.log(2**3); // возведение в степень (2 в степени 3)
console.log(4**(1/2)); // квадратный корень из 4х
let text = "кусок_1" + " + " + "кусок_2"; // '+' - помимо сложения чисел склеивает текст. При этом переменная меняет тип на 'string', 
//если хотя бы одно из слагаемых имеет этот тип.
console.log(text);
let a ="1", b ="2"; // текстовые переменные типа string
console.log(+a + +b); //'унарный' знак + переводит текст в число, 'бинарный' плюс между числами - складывает их. В логе мы видим число 3.
let k = 1, l = 2;
let m = 2-(k=l+1);
console.log(k);
console.log(m);
let q,r,s;
q=r=s=2+2; // такое присвоение работает справа-налево по порядку
           // -сначала вычисляется выражение српава, после оно присвоится переменной 's', затем 'r' , затем 'q'.
s=2+2;
r=s;
q=r;  // Такой вариант гораздо удобнее читать.
let n =2;
n+=5; // n=n+5
console.log(n);
n*=2; // n = n*2;
console.log(n);
let d = 3;
d*=3+5;
console.log(d);
let counter =2;
counter ++; // инкремент (+1)
console.log(counter);
counter --; // декремент
console.log(counter);
let g = ++counter; // префиксная форма инкремента, венрет в console.log(g) значение "3"
console.log(g);
counter = 2;
g = counter++; //постфиксная форма, вычислит значение g = 3, но вернет значение "2"
console.log(g);
console.log(2* ++counter); //вернет значение 8, т.к. counter был проинкрементирован выше.
console.log(2* counter++); //вернет значение 8, т.к. counter был проинкрементирован выше.
let j = (1+2, 3+4);
console.log(j);
// || && !  логические операторы - или, и, не
console.log(true||true); //true
console.log(true||false); //true
console.log(false||true); //true
console.log(false||false); //false

let currentUser = null;
let defaultUser ="Николай";
let name = currentUser || defaultUser || "unnamed";
console.log(name); //Выведет в консоль "Николай", т.к. переменной defaultUser присвоено значение, а значит она true


let x2;
true || (x2 = 1);
console.log(x2); // undefined, т.к. выражение не вычисляется - сработало true для оператора или (||)

false || (x2 = 1);
console.log(x2); // 1, т.к. выражение вычисляется - сработало false для оператора или (||)


console.log(true&&true); //true
console.log(true&&false); //false
console.log(false&&true); //false
console.log(false&&false); //false

let hour =12;
let minute =30;
if (hour ==12 && minute ==30) {  //здесь фигурная скобка соответсвует "then" в языке VBA/VBE
    console.log("Текущее время 12:30");
}


console.log(!true); //false
console.log(!!null); //false
console.log(!!"text"); //true
