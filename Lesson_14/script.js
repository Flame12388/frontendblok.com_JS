'use strict';
//callback-функция

function one(){
    setTimeout(function(){
    console.log("one");
    }, 1000);
}

function two(){
    console.log("two");
}
one();
two();

function test(subject, callback){
    console.log(`Начало написания теста по предмету:  ${subject}`);
    callback();
}
function finish(){
    console.log(`Окончание теста`);
}
test('физика', finish);