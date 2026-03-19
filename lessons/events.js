let result = document.getElementById('result');
let div1 = document.getElementById('div1');

  document.addEventListener('mousemove', (e) => {
        // e.clientX - X относительно окна
        // e.clientY - Y относительно окна
        result.textContent = `X: ${e.clientX}, Y: ${e.clientY}`;
    });
    
  div1.addEventListener('mouseout', (e) => {
        // e.clientX - X относительно окна
        // e.clientY - Y относительно окна
        div1.textContent = 'Курсор покинул элемент';
    });
div1.addEventListener('mouseenter', (e) => {
        // e.clientX - X относительно окна
        // e.clientY - Y относительно окна
        div1.textContent = 'Курсор пришел на  элемент';
    });
