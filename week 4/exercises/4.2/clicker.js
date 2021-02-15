let recX = 0;
const rectWidth = 75;
let clickCount = 0;
function setup () {
    createCanvas(500, 500);
    rectY = random(height - rectHeight);
}

function draw () {
    background('#DAF7A6');
    drawShape();
    rectX++;
    if( rectX > width) {
        noLoop();
        text('Your score was ' + clickCount, 100, 300);
    }
}

function mousePressed() {
    if ((mouseX >= rectX && mouseX <= rectX + rectWidth) && (mouseY >= 0 && mouseY <= 75)) {
        clickCount++;
        console.log('hit', clickCount);
    }
}

function drawShape() {
    fill('white');
    rect(rectX, rectY, rectWidth, rectHeight);
}