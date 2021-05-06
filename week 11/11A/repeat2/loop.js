
function setup() {
    createCanvas(600,600);
    noStroke();
}
  
function draw() {
    background(255, 191, 0);
    for (var y = 0; y <= height; y += 40) {
        for (var x = 0; x <= innerWidth; x +=40){
            fill(255, 140);
            ellipse(x,y, 40, 40);
        }
    }
}
