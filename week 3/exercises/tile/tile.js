function setup() {
    createCanvas(200, 200);
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('#334d00');
    rect(0, 0, 200, 200);
    stroke('#558000');
    strokeWeight('10');
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    noStroke();
    fill('#223300');
    circle(100, 50, 50);
    circle(50, 100, 50);
    circle(150, 100, 50);
    circle(100, 150, 50);
    noFill();
    stroke('#b3ff1a');
    strokeWeight('1');
    line(0, 0, 200, 200);
    line(200, 0, 0, 200);
    stroke('#408000');
    strokeWeight('4');
    circle(50, 100, 100);
    circle(150, 100, 100);
    circle(100, 50, 100);
    circle(100, 150, 100);
}

function draw() {
    createTile();
}


