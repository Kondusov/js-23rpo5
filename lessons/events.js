let result = document.getElementById('result');
let div1 = document.getElementById('div1');

  document.addEventListener('mousemove', (e) => {
        // e.clientX - X относительно окна
        // e.clientY - Y относительно окна
        result.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
    });
    
  div1.addEventListener('mouseout', (e) => {
        div1.textContent = 'Курсор покинул элемент'+` X: ${e.clientX}, Y: ${e.clientY}`;
    });
div1.addEventListener('mouseenter', (e) => {
        div1.textContent = 'Курсор пришел на  элемент'+` X: ${e.clientX}, Y: ${e.clientY}`;
    });
document.addEventListener('keypress',(e)=>{
  console.log(e.key);
})