const newmovie = window.prompt("What's your favorite Wes Anderson movie?");

const myMovies = [
  'The Royal Tenenbaums',
  'Fantastic Mr. Fox',
  'The Darjeeling Limited',
  'The Life Aquatic with Steve Zissou',
  'Isle of Dogs',
];
console.log(myMovies);

myMovies.push(newmovie);
console.log(myMovies.toString());