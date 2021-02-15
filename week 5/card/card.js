function setup() {
    createCanvas(200, 200);
    noLoop();
}

function createTile() {
    translate(0, 0);
    fill('#cceeff');
    circle(200, 200);
    stroke('#558000');
    strokeWeight('10');
}

function draw() {
    createTile();
}