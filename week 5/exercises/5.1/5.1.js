//variables
let blockX = 0;
let blockY = 0;
let drawTimer;
let speed = 3;
let distance = 2;
let blockColor = 255;

//canvas
function setup () {
  createCanvas(500, 500);
  background('#ffaa00');
}

//lil square
function drawBlock (x, y, color) {
  fill(color || 255);
  rect(x, y, 50, 50);
}

//key 
function keyTyped () {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
}

//timer
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
    if (blockY - 50 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } 
    else {
      blockY = 0;
      blockX += 50;
    }
    if (blockY >= height - 50 && blockX >= width - 50) {
     //cancels timer 
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);