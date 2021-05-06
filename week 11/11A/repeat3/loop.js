
function setup() {
    createCanvas(600,600);
    fill (0, 205, 255);
    stroke (96, 172, 255);
}

function draw() {
    background(191, 222, 255);
    for (var y = 50; y <= height-50; y += 10){
        for (var x = 50; x <= width-50; x += 10){
            ellipse(x, y, 3, 3);
            line (x,y,300,300);
        }
    }
}


