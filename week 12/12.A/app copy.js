var sparrow;
let sky;

var sound2;
var sound3; 
var sound5;

let bird1; 
let bird2; 
let bird3; 

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

function draw() {
    background(sky);
    image(sparrow, mouseX, mouseY);
    image(cloud1, 200, 400);

}

function setup() {
    canvas = createCanvas(displayWidth, displayHeight);  
}

function playA () {
    sound2.play();
}

function playB () {
    sound3.play();
}

function playC () {
    sound5.play();
}

//https://creative-coding.decontextualize.com/media/ while looking for resources to assist me I found a way to tether an image to the mouse.

