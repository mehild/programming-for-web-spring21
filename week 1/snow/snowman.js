let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#ccc");
    grid = loadImage("images/100px_grid.png");
}
function draw() {
    background(grid);
    // snowman legs
    fill("#f1f1f1");
    stroke("100, 250, 100");
}