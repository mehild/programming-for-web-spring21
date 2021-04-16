var level; 
var mySound;

function preload() {
    //soundFormats('wav');
    mySound = loadSound('forest.wav');
}
  
  function setup() {
    let cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(canvasPressed);
  }

  function draw() {
    background(204, 204, 255);
      
}
  
  function canvasPressed() {
    mySound.play();
  }