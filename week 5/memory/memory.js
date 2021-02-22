const DOWN = 'down';
const UP = 'up';

let startingX = 200;
let startingY = 200;
let cards = [];

const gameState = {
    totalPairs: 6,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false,
};

//card images

let cardfaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('img/cardback.png');
    cardfaceArray = [
        loadImage('img/flake1.jpg'),
        loadImage('img/flake2.jpg'),
        loadImage('img/flake3.jpg'),
        loadImage('img/flake4.jpg'),
        loadImage('img/flake5.jpg'),
        loadImage('img/flake6.jpg'),
    ];
}

function setup() {
    createCanvas(displayWidth, displayHeight);
    let selectedFaces = [];
    for (let z = 0; z < 6; z++) {
        const randomIndex = floor(random(cardfaceArray.length));
        const face = cardfaceArray[randomIndex];
        selectedFaces.push(face);
        selectedFaces.push(face);
        cardfaceArray.splice(randomIndex, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);

    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 4; i++) { 
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX +=175;
        }
        startingY += 225;
        startingX = 100;
    }
}
