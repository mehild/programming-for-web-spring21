function setup() {  
    createCanvas(800, 800);
}
function draw() {
    if (mouseIsPressed) {   
    fill(57, 94, 96);  
    } else {    
    fill(95, 158, 160);  
    } 
    ellipse(mouseX, mouseY, 50, 50);

}
