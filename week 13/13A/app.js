var pos
var inc
let img

function preload() {
    img = loadImage('ball.png');
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
    image(img, 1, amplified);    
}