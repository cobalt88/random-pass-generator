const row1 = [0,1,0]
const row2 = [1,0,0]
const row3 = [0,0,1]
const row4 = [1,1,1]

let grid = [row1, row2, row3, row4];

const cell = (x, y) => {
  return grid[x][y];
};

if(cell(0,0) === 1) {
  console.log('cell is alive');
};

row[0] = [1,0,0];
