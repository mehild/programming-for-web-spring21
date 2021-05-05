var mySound
let img

function preload () {
    img = loadImage('forest.jpg');//add image
    mySound = loadSound('forest.wav');
}

function setup () {
    const cnv = createCanvas(displayWidth, displayHeight);
    image(img, 0, 0);
    cnv.mouseClicked(toggleSound);
    mySound.setVolume(1);
}

function toggleSound () {
    if (mySound.isPlaying()) {
        mySound.stop();
    } else {
        mySound.play();
    }
}

//https://p5js.org/reference/#/libraries/p5.sound 