var sparrow;
let sky;
let mySound;

function preload() {
  sparrow = loadImage("images/2.png");
  sky = loadImage("images/sky.png");
  soundFormats('wav');
  mySound = loadSound('sound/sound2.wav');
}

function draw() {
    background(sky);
    image(sparrow, mouseX, mouseY);
}

function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(canvasPressed);
}

function canvasPressed() {
    mySound.play();
}

//https://creative-coding.decontextualize.com/media/ while looking for resources to assist me I found a way to tether an image to the mouse.

