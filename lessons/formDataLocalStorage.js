        let form = document.querySelector('form');
        let p;
        form.addEventListener('submit', (event)=>{
            
            event.preventDefault();
            let username = document.getElementById('username').value;
            let message = document.getElementById('message').value;
            localStorage.setItem(localStorage.length++, username + message);
            
        });
        p = document.getElementById('data-form');
        for(let i = 0; i < localStorage.length; i++){
        let item = localStorage.key(i);
            p.append(localStorage.getItem(item));
        }