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
    inc = 0.5;
}

function draw() {
    clear();
    translate(width/5, height/5);

    var mySinVal = 4*sin(sin(2*pos))/cos(4*pos);
    console.log(mySinVal);
    
    amplified = mySinVal * 500
    image(img, 10, amplified);

   pos = pos + inc
}