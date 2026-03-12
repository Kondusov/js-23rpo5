// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else

let user_age = prompt('Ведите ваш возраст')
console.log(user_age);
if(user_age*1 > 18){
    console.log("Допущены к использованию сайта!");
}else{
    console.log("Не допущены к использованию сайта!");
}
////////////////////

////////////////////

let date = new Date();
let currentHour = date.getHours();
console.log(currentHour);

let hello = ["Доброе утро", "Добрый день", "Доброй ночи"];

if(currentHour > 6 && currentHour < 12){
    console.log(hello[0]);
}else if(currentHour >= 12 && currentHour < 18){
    console.log(hello[1]);
}else{
    console.log(hello[2]);
}