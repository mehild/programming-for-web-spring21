let rotateBy= 4;
function setup() {
    createCanvas(600, 600);
    background(0, 102, 153);
    angleMode(DEGREES);
}
function makeArm() {
    let alt = Math.round(rotateBy /360);
    console.log(alt);
    noFill();
    stroke(0, 68, 102);
    strokeWeight(1);
    ellipse(150, 150 + alt, 150 / alt);
    stroke(26, 178, 255);
    square (50, 50, 20);
    stroke(128, 212, 255);
    square (100, 100, 10);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 8;
}

function mousePressed() {
    noLoop();
}
