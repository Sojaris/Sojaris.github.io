let catImage 
let foodImages = [];
let scaleFactor = 1;
let catWidth, catHeight;
let gameOver = false;

function preload() { 
  catImage = (catgame/cat.png);
  for (let i = 0; i < 10; i++) {
    foodImages.push(loadImage(`food${i}.png`));
  }
}

function setup() {
  createCanvas(600, 400);
  catWidth = catImage.width;
  catHeight = catImage.height;
}

function draw() {
  background(gameOver ? 0 : 255);
  if (!gameOver) {
    image(catImage, width / 2 - catWidth / 2 * scaleFactor, height / 2 - catHeight / 2 * scaleFactor, catWidth * scaleFactor, catHeight * scaleFactor);
  } else {
    fill(255, 0, 0);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("Game Over", width / 2, height / 2);
  }
}

function mousePressed() {
  if (!gameOver) {
    for (let i = 0; i < foodImages.length; i++) {
      let d = dist(mouseX, mouseY, width / 2, height / 2);
      if (d < 50) {
        if (i === 5) {
          gameOver = true;
        } else {
          scaleFactor += 0.1;
          return;
        }
      }
    }
  }
}
