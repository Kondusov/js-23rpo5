for(let i = 0; i < 10; i++){
    console.log(i);
}
////////////////////////
let user_name = prompt('Ведите ваше имя');
while(user_name){
    user_name = prompt('Ведите ваше имя');
    if(user_name == null) break;
    alert('Привет '+ user_name);
}