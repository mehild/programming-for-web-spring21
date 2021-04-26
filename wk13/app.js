var pos;
var inc;
let img;

function preload() {
    img = loadImage('ball.png');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    pos = 0.0; 
    inc = 0.3;
}

function draw() {
    clear();
    translate(width/7, height/7);

    var mySinVal = 4*sin(sin(2*pos))/cos(4*pos);
    console.log(mySinVal);
    
    amplified = mySinVal * 800
    image(img, 9, amplified);

   pos = pos + inc
}