//////////// простой вариант решения
// let form = document.querySelector('form');
// let stroke = document.querySelector('p');
// form.addEventListener('submit', (event)=>{
//     event.preventDefault();
//     let let1 = document.querySelector('#let1').value;
//     let let2 = document.querySelector('#let2').value;
//     let newStr = stroke.textContent.replaceAll(let1, let2);
//     stroke.textContent = newStr;
// });
//////////// вариант решения с циклом
let form = document.querySelector('form');
let stroke = document.querySelector('#result');
function custom_replaceAll(string,let1,let2){
let arr = string.textContent.split("");
    for(let i = 0; i<arr.length;i++){
        if(arr[i]== let1)
            arr[i]=let2;
    }
    return arr.join("");
}
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    let let1 = document.querySelector('#username').value;
    let let2 = document.querySelector('#message').value;
    stroke.textContent = custom_replaceAll(stroke, let1, let2);
});
