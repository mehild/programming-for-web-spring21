let grid = undefined;
function setup() {
    createCanvas(1000, 800);
    background("#DED7F3");
}

function draw() {

    // bottom
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

    //nose
    stroke("#FF6400 ");
     
    // lil middle
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
   
}