function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    pos = 0.0 
    inc = 3.0
}
function draw() {
    var mySinVal = sin(pos)
    console.log(mySinVal)
    ellipse(mySinVal + 100, height/2, 50, 50)
    pos = pos + inc
}