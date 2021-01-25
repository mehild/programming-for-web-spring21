let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#DED7F3");
}

function draw() {

    // bottom
    fill('#f1f1f1');
    stroke("#926DFD");
    strokeWeight(10);
    ellipse(500, 600, 300);
    // middle
    stroke("#926DFD");
    strokeWeight(10);
    ellipse(500, 400, 200); 
    // head
    stroke("#926DFD");
    strokeWeight(10);
    ellipse(500, 275, 100);
    
    // eyes
    stroke("#000000");
    strokeWeight(8);
    point(480, 275);
    point(510, 275);
    // nose
    noStroke();
    fill("#FF6400");
    triangle(500, 290, 460, 290, 500, 278);
    // mouth
    stroke("#000000");
    strokeWeight(5);
    noFill();
    arc(490, 270, 70, 70, 20, HALF_PI);

    // arm left
    stroke("#644228");
    strokeWeight(8);
    line(300, 500, 410, 400);
    // arm right
    line(590, 400, 700, 300);
     
    // lil middle
    fill('#f1f1f1');
    stroke("#926DFD");
    strokeWeight(5);
    ellipse(250, 700, 150); 
    // lil head
    stroke("#926DFD");
    strokeWeight(5);
    ellipse(250, 600, 90);
    // lil eyes
    stroke("#000000");
    strokeWeight(5);
    point(240, 585);
    point(260, 585);
    // lil nose
    noStroke();
    fill("#FF6400");
    triangle(250, 600, 275, 590, 250, 590);
    // mouth
    stroke("#000000");
    strokeWeight(3);
    noFill();
    arc(250, 580, 70, 70, 20, HALF_PI);
   
}