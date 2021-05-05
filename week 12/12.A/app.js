var sparrow;
let sky;

function preload() {
  sparrow = loadImage("images/2.png");
  sky = loadImage("images/sky.png");
}
function setup() {
  createCanvas(displayWidth, displayHeight);
}
function draw() {
  background(sky);
  image(sparrow, mouseX, mouseY);
}

//https://p5js.org/reference/#/libraries/p5.sound