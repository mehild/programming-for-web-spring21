let blockX = 0;
let blockY = 0;
let drawTimer;
let speed = 5;
let distance = 2;
let blockColor = 255;
function setup () {
  createCanvas(400, 400);
  background(0);
  drawBlock(blockX, blockY, 255);
}

function drawBlock (x, y, color) {
  fill(color || 255);
  rect(x, y, 40, 40, 10);
}

function keyTyped () {
  let keyToNumber = Number(key);
  if (isNaN(keyToNumber)) {
    return;
  }
  keyToNumber = map(keyToNumber, 1, 9, 1, 255);
  console.log('converted number', keyToNumber);
  blockColor = keyToNumber;
  console.log('key to number3', keyToNumber);
}
window.setTimeout(() => {
    drawTimer = window.setInterval(() => {
    if (blockY - 40 <= height) {
      drawBlock(blockX, blockY, blockColor);
      blockY += distance;
    } 
    else {
      blockY = 0;
      blockX += 40;
    }
    if (blockY >= height - 40 && blockX >= width - 40) {
      window.clearInterval(drawTimer);
      alert('done');
    }
  }, speed);
}, 1500);