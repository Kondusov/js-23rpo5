const table = document.getElementById('table');
  const btn = document.getElementById('btn');

  const cells = Array.from(table.querySelectorAll('td')); // все td
  let copyCells = [...cells]; // список ещё не покрашенных (делаем копию для безопасности)

  btn.addEventListener('click', () => {
    if (copyCells.length === 0) {
      console.log('Все ячейки уже покрашены.');
      return;
    }
    const index = Math.floor(Math.random() * copyCells.length);
    const cell = copyCells[index];

    cell.style.backgroundColor = 'red';
    copyCells.splice(index, 1);
    console.log(copyCells);
  });