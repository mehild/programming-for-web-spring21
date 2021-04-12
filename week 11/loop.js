
function setup() {
    createCanvas(displayWidth, displayHeight);
}
  
function draw() {
    background (171, 219, 227);
    strokeWeight(1);
    noFill();
    stroke(234, 182, 118);
    for (var y = 0; y <= height; y += 8 ) {
        for (var x = 0; x <= width; x += 15) {
            ellipse( x + y, y, 16 - y/10.0, 16 - y/10.0);
        }
    }
}