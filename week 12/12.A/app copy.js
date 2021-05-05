var sparrow;
let sky;

let sound2;
let sound3; 
let sound5;

var bird1; 
var bird2; 
var bird3; 

function preload() {
    sparrow = loadImage("images/2.png");
    sky = loadImage("images/sky.png");

    bird1 = loadImage("images/4.png");
    bird2 = loadImage("images/5.png");
    bird3 = loadImage("images/3.png");

    soundFormats('wav');
    sound2 = loadSound('sound/sound2.wav');
    sound3 = loadSound('sound/sound2.wav');
    sound5 = loadSound('sound/sound2.wav');
}
function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(canvasPressed);
} 

function draw() {
    background(sky);
    image(sparrow, mouseX, mouseY);
    image(bird1, 200, 200);
    image(bird2, 500, 400);
    image(bird3, 800, 300);
}
//tried tons of different mouse controls mousePressed etc... changed up let and var of sound and birds nothing worked defaulted to one sound

function canvasPressed() {
    sound2.play();
}

//https://creative-coding.decontextualize.com/media/ while looking for resources to assist me I found a way to tether an image to the mouse.

