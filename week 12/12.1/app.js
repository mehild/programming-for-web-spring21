//var mySound;

//function preload() {
   // mySound = loadSound('forest.wav');
}

//function setup() {
   // cnv = createCanvas(500, 500);
   // mySound.setVolume(0.1);
   // mySound.play();
}

  //function draw() {
      
}

function preload() {
    soundFormats('wav');
    mySound = loadSound('forest');
  }
  
  function setup() {
    let cnv = createCanvas();
    cnv.mousePressed(canvasPressed);
    background(220);
  }
  
  function canvasPressed() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
    mySound.play('forest.wav');
  }