//from tutorials
const DOWN = 'down';
const UP = 'up';
let startingX = 250; 
let startingY = 250;
let cards = [];
const gameState = {
};

let cardfaceArray = [];
let cardback;
function preload(){
    cardback = loadImage('img/cardback.png');
    cardfaceArray = [
        loadImage('img/flake1.jpg'),
        loadImage('img/flake2.jpg'),
        loadImage('img/flake3.jpg'),
        loadImage('img/flake4.jpg'),
        loadImage('img/flake5.jpg'),
        loadImage('img/flake6.jpg')
    ];
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#66ccff');
    let selectedFaces = [];
    for (let z = 0;  z < 4; z++) {
        const randomIdx = floor(random(cardfaceArray.length)); 
        const face = cardfaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove
        cardfaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 3; j++){ //rows
        for (let i = 0; i < 4; i++){ //col
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startX += 120; 
        }   
        startingY += 150;
        startingX = 100; 
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)){
            console.log('flipped');
        }
    }
}

class Card {
    constructor (x,y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 100;
        this.face = DOWN
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show (){
        if (this.face === DOWN) {
            fill('#000');
            rect(this.x, this.y, this.width, this.height, 10)
            image(cardback, this.x, this.y)
        } else {
            fill('#aaa');
            rect(this.x, this.y, this.width, this.height, 10)
            image(this.cardFaceImg, this.x, this.y)
        }
        
    }

    didHit(mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width && mouseY>= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;   
        } else {
            return false;
        }
    }

    flip () {
        if (this.face === DOWN ) {
            this.face = UP; 
        } else {
            this.face = DOWN; 
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
    // pick random index
    const idx = Math.floor(Math.random() * counter);
    // decrease counter by 1 (decrement)
    counter--;
    //swap the last element with it
    const temp = array[counter];
    array[counter] = array[idx];
    array[idx] = temp;
    }
    return array;
}