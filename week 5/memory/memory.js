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