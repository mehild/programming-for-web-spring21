var mySound
let amplitude

function preload () {
    mySound = loadSound('forest.wav');
}

function setup () {
    const cnv = createCanvas(displayWidth, displayHeight);
    cnv.mouseClicked(toggleSound);
    mySound.setVolume(1);
}

function draw () {
    background('#D0f0C0');
}

function toggleSound () {
    if (mySound.isPlaying()) {
        mySound.stop();
    } else {
        mySound.play();
    }
}

//https://p5js.org/reference/#/libraries/p5.sound 