var pos;
var inc;
let img;

function preload() {
    img = loadImage('ball.png');
  }

function setup() {
    createCanvas(displayWidth, displayHeight);
    angleMode(DEGREES);

    pos = 0.0; 
    inc = 0.3;
}

function draw() {
    clear();
    translate(width/8, height/8);

    var mySinVal = sin(pos)
    console.log(mySinVal);
    
    amplified = mySinVal * 2000
    image(img, 8, amplified);

   pos = pos + inc
}