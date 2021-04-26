function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    pos = 0.0 
    inc = 3.0
}

function draw() {
    clear ()
    var mySinVal = sin(pos)
    amplified = mySinVal * 50
    ellipse(amplified + 100, height/2, 50, 50)
    pos = pos + inc
}