var ballx = 300;
var bally = 600;
var ballwidth = 50;
var ballheight = 50;

var balldirectionx = 1;
var balldirectiony = -1;
var ballspeed = 5;

let bg;

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg = loadImage('court.jpeg'); //background
}

function draw() {
   background(bg);
   noStroke(); 
   fill(173,255,47); //tennis ball color

   ballx = ballx + (balldirectionx*ballspeed);
   bally = bally + (balldirectiony*ballspeed);

   ellipse(ballx, bally, ballwidth, ballheight); //tennis ball

   if(ballx < 0) {
       balldirectionx = balldirectionx*-1; 
   }

   if(ballx > width) {
    balldirectionx = balldirectionx*-1; 
   }

   if(bally < 0) {
    balldirectiony = balldirectiony*-1;
   }

   if(bally > height) {
    balldirectiony = balldirectiony*-1;
   }
}

//used https://youtu.be/Kp070rI_G48 as a guide... somewhat helpful.

//tried to get the ellipse to be an image of a tennis ball... was unsuccessful.