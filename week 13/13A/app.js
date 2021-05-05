var pos
var inc
let img1
//let img2

function preload() {
    img1 = loadImage('ball.png');
    //img2 = loadImage('ball2.png');
  }

function setup() {
    createCanvas(900, 900);
    angleMode(DEGREES);

    pos = 0.0; 
    inc = 0.3;
}

function draw() {
    clear();
    translate(width/10, height/10);

    var mySinVal = sin(pos)
    console.log(mySinVal);
    
    amplified = mySinVal * 1000
    image(img1, 1, amplified);

   pos = pos + inc
}