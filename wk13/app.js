let img;

function preload() {
    img = loadImage('ball.png');
  }

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);

    pos = 0.0 
    inc = 3.0
}

function draw() {
    clear ()
    var mySinVal = sin(pos)
    amplified = mySinVal * 50
    img(amplified + 100, height/2, 50, 50)
    pos = pos + inc

    amplified = mySinVal * 500

    image(img, -1100, amplified);
    image(img, -800, amplified);
    image(img, -500, amplified);
    image(img, -200, amplified);
    image(img, 100, amplified);
    image(img, 400, amplified);
    image(img, 700, amplified);
}