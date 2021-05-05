function setup() {
    createCanvas(900, 900);
    noFill();
    angleMode(DEGREES);
    pos = 1.0 
    inc = 1.0
}

function draw() {
    background 	(255,99,71)

    var mySinVal = sin(pos)
    amplified = mySinVal * 100
    ellipse(amplified + 400, height/9, 100, 100)
    pos = pos + inc

    var mySinVal = sin(pos)
    amplified = mySinVal * 200
    ellipse(amplified + 300, height/4, 50, 50)

    var mySinVal = sin(pos)
    amplified = mySinVal * 400
    ellipse(amplified + 300, height/6, 25, 25)

    var mySinVal = sin(pos)
    amplified = mySinVal * 300
    ellipse(amplified + 300, height/3, 200, 200)

    var mySinVal = sin(pos)
    amplified = mySinVal * 500
    ellipse(amplified + 300, height/3, 25, 25)

    var mySinVal = sin(pos)
    amplified = mySinVal * 800
    ellipse(amplified + 300, height/7, 75, 75)

}