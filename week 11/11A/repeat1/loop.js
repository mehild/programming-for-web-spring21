
function setup() {
    createCanvas(600,600);
    background(128, 128, 0);
}
  
function draw() {
    if (mouseIsPressed) {
        fill (0, 255, 0);
    } else {
        fill(0, 128, 0);
    }
    ellipse(mouseX, mouseY, 100, 100);
}
