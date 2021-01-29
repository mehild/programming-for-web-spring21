const gameChoice = window.prompt("I have 3 games in my collection. Pick a number between 1 and 3 and I'll tell you about that game.");

const myGames = 
[
    {
    title: 'Connect-Four', 
    type: 'board game', 
    numberOfPlayers: '2', 
    shortDescription: 'is a tic-tac-toe-like game.'
    },

    {
    title: 'Jenga', 
    type: 'puzzle', 
    numberOfPlayers: '6', 
    shortDescription: 'remove a block from the tower without toppling the whole thing over.'
    },

    {
    title: 'Mancala', 
    type: 'board game', 
    numberOfPlayers: '2', 
    shortDescription: 'turn-based strategy board game played with small stones.'
    },
];

window.alert
(
'You selected ' 
+ myGames[gameChoice - 1].title +
      
', which is a ' 
+ myGames[gameChoice - 1].type +
      
' with ' 
+ myGames[gameChoice - 1].numberOfPlayers +

' players. Short Description: ' 
+ myGames[gameChoice - 1].shortDescription
);