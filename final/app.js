
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
      // Pick random index
      const idx = Math.floor(Math.random() * counter);
      // decrease counter by 1 (decrement)
      counter--;
      // swap the last element with it
      const temp = array[counter];
      array[counter] = array[idx];
      array[idx] = temp;
    }
    return array;
  }