const grid = document.querySelector('.grid');

let dimensions = prompt("Please input your grid dimensions: ");
      // Use a nested for loop to create the grid cells
      for (let i = 0; i < dimensions; i++) {
        const column = document.createElement("div");
        column.classList.add("column");
        for (let j = 0; j < dimensions; j++) {
          const cell = document.createElement('div');
          cell.classList.add('cell');
          column.appendChild(cell);
        }
        grid.appendChild(column);
      }