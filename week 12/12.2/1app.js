var level; 
var mySound;


function preload() {
    //soundFormats('wav');
    mySound = loadSound('forest.wav');
}
  
  function setup() {
    createCanvas(displayWidth, displayHeight);
    cnv.mousePressed(canvasPressed);
    mySound.setVolume(0.1);
}

  function draw() {
    background(black); 
    textAlign(CENTER);
    text('click to play and pause');    
}

function canvasPressed () {
    if (mySound.isPlaying()) {
        mySound.stop();
    } else {
        mySound.play();
    }
}