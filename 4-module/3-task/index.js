function highlight(table) {
  for (const body of table.tBodies) {
    for (const row of body.rows) {
      for (let cell of row.cells) {
        if (cell.cellIndex === 3) {
          if (cell.hasAttribute('data-available')) {
            if (cell.getAttribute('data-available') === 'true') {
              row.classList.add('available');
            } else {
              row.classList.add('unavailable');
            }
          } else {
            row.setAttribute('hidden', true);
          }
        }
        if (cell.cellIndex === 2) {
          if (cell.innerHTML === 'm') {
            row.classList.add('male');
          } else {
            row.classList.add('female');
          }
        }
        if (cell.cellIndex === 1) {
          let age = parseInt(cell.innerHTML);
          if (age < 18) {
            row.style.textDecoration = 'line-through';
          }
        }
      }
    }
  }
  return table;
}
