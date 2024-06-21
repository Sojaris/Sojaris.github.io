let gridWidth = 10;
let gridHeight = 9;
let cellSize;
let grid = [];

function setup() {
  createCanvas(500, 450);
  cellSize = width / gridWidth; // sunu izmers
  rollDice(); // metam kaulinu
  generateGrid();
}

function draw() {
  background(255);


  for (let x = 0; x < gridWidth; x++) {
    for (let y = 0; y < gridHeight; y++) {
      let xPos = x * cellSize;
      let yPos = y * cellSize;

      
      let symbol = grid[x][y];
      drawSymbol(xPos, yPos, symbol);
    }
  }
}

function rollDice() {
  return floor(random(1, 7)); // random cipars no 1 lidz 6
}

function generateGrid() {
  
  for (let x = 0; x < gridWidth; x++) {
    grid[x] = [];
    for (let y = 0; y < gridHeight; y++) {
      grid[x][y] = rollDice();
    }
  }
}

function drawSymbol(x, y, sides) {
  let symbolSize = cellSize * 0.8;

  
  switch (sides) {
    case 1:
      line(x, y + symbolSize / 2, x + symbolSize, y + symbolSize / 2); // 1- linija
      break;
    case 2:
      line(x, y, x + symbolSize, y + symbolSize); // 2- divas slipas linijas
      line(x, y + symbolSize, x + symbolSize, y); 
      break;
    case 3:
      line(x, y, x + symbolSize, y + symbolSize); // 3- tris slipas linijas
      line(x, y + symbolSize / 2, x + symbolSize, y + symbolSize / 2);
      line(x, y + symbolSize, x + symbolSize, y);
      break;
    case 4:
      line(x, y, x + symbolSize, y); // 4- divas linijas preti viena otrai
      line(x, y + symbolSize, x + symbolSize, y + symbolSize);
      break;
    case 5:
      line(x, y, x + symbolSize, y + symbolSize); // 5- divas linijas, krustojosas sava starpa
      line(x, y + symbolSize, x + symbolSize, y);
      break;
    case 6:
      rect(x + symbolSize / 4, y + symbolSize / 4, symbolSize / 2, symbolSize / 2); // 6- kubs
      break;
    default:
      break;
  }
}
function keyPressed() {
    if (keyCode === ENTER) { 
      generateGrid();
    }
  }