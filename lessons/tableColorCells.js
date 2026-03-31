let table = document.getElementById("table-red"); // Получили таблицу
let button = document.getElementById("color"); // Получили кнопку

let cells = table.querySelectorAll("td"); // Массив ячеек
for (let i = 0; i < cells.length; i++) {
    cells[i].setAttribute("id", i);
}
let copyCells = [...cells];
button.addEventListener('click', ()=>{
    if (copyCells.length == 0) {
        console.log("Ячейки все закрашены");
    }
    let randomId = Math.floor(Math.random() * copyCells.length); // Рандомный выбор ячейки
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].id === copyCells[randomId].id) {
            cells[i].style.backgroundColor = "red";
            copyCells.splice(randomId, 1);
        }
    }
});
