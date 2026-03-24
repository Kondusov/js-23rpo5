        let form = document.querySelector('form');
        let p;
        form.addEventListener('submit', (event)=>{
            
            event.preventDefault();
            let username = document.getElementById('username').value;
            let message = document.getElementById('message').value;
            localStorage.setItem(localStorage.length++, username + message);
            
        });
        p = document.getElementById('data-form');
        let result = '';
        for(let i = 0; i < localStorage.length; i++){
        let item = localStorage.key(i);
            result += '<p>'+localStorage.getItem(item)+
            `<button onclick="localStorage.removeItem('${localStorage.key(i)}')">Удалить</button></p>`;
        }
        p.innerHTML = result;