
function setup() {
    //createCanvas(displayWidth, displayHeight);
    createCanvas(480, 120);
  }
  
function draw() {
    //background (171, 219, 227);
    //strokeWeight(20);
    //noFill();
    //stroke(234, 182, 118);
    background (0);
    for (var y = 32; y <= height; y += 8 ) {
    for (var x = 12; x <= width; x += 15) {
        ellipse( x + y, y, 16 - y/10.0, 16 - y/10.0);
        }
    }
  }
  //arc( x + y, y, 16 - y/10.0, 16 - y/1 60, 80, 80, 0, HALF_PI);