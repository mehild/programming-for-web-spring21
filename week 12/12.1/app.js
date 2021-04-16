var level; 
var mySound;
var circleX = 250
var circleY = 250

function preload() {
    //soundFormats('wav');
    mySound = loadSound('forest.wav');
}
  
  function setup() {
    createCanvas(displayWidth, displayHeight);
    mySound.setVolume(0.1);
    mySound.play();
    
    //let cnv = createCanvas(displayWidth, displayHeight);
    //cnv.mousePressed(canvasPressed);
}

  function draw() {
    //background(204, 204, 255);
    level = mySound.getLevel();
    var diameterX = level * 2500
    var diameterY = level * 2500 * random (1.5)

    ellipse(circleX, circleY, diameterX, diameterY)
      
}
  
  //function canvasPressed() {
   // mySound.play();
  //}