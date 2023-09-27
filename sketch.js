function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255, 255, 255);
  randomSeed(0);

for (let I = 0; I <= 150; I = I + 1 ) {
  x1 = random(1, 799);
  y1 = random(1, 799);
  x2 = random(1, 799);
  y2 = random(1, 799);
  fill(0);
  line(x1, y1, x2, y2);
  }
} 