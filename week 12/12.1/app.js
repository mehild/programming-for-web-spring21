function preload() {
    soundFormats('wav');
    mySound = loadSound('forest.wav');
}
  
  function setup() {
    cnv = createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(canvasPressed);
  }

  function draw() {
    background(204, 204, 255);
      
}
  
  function canvasPressed() {
    mySound.play('forest.wav');
  }