'use strict';
//объекты и их методы
let user = { //имя объекта, объект объявляется как переменная и имеет набор параметров
name: "Николай", // параметр (метод) имеет имя и значение, не должно быть параметров с одинаковым именем
age: 34,
eyescolor: "green"
};
user.age = 35;
user.height = 170;
delete user.age;
console.log(user.name);
console.log(user);

let taxi = {  //создаём объект 'такси'
    make: "ford",
    model: "crown victoria",
    year: 1999,
    color: "yellow",
    mileage: 58000,
    started: true,
    start: function(){
        this.started  = true; //'this' указывает на то, что это метод текущего объекта 'taxi',
        // без него выскакивает ошибка.
    },
    stop: function(){
        this.started = false;
    },
    drive: function(){
        if(this.started){
            console.log("wroom-wroom, motherfucker! (=");
        }else{
            console.log("Заведи мотор!");
        }
    }
};
taxi.drive();
// function prequal(car){  //создаём функцию, проверяющую параметры объекта 
//     if(car.mileage > 10000){
//         return false;
//     }else if(car.year > 2000){
//         return false;
//     }
//     return true;
// }

// let workAtLook = prequal(taxi); //передаём наш объект нашей функции в качестве аргумента и присваиваем значение переменной workAtLook
// if (workAtLook){ //если значение переменной = true, выведем в консоль сообщение.
//     console.log(`Ты должен всё это проверить: ${taxi.make} ${taxi.model}, ${taxi.year}`);
// }else{
//     console.log(`Вы действительно должны проверить: ${taxi.make} ${taxi.model}, ${taxi.year}`);
// }