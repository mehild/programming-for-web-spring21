const myQuestions = [
    {question: 'How hot is the sun?', answer: '27 million degrees.'},
    {question: 'Is the Earth flat?', answer: 'NO.'},
    {question: 'How many people live on planet Earth?', answer: '7.674 billion.'},
];

console.log(myQuestions); 
const randomQuestion = Math.round(Math.random() * (myQuestions.length - 1)); 
console.log(randomQuestion); 

const questionAnswer = window.prompt(myQuestions[randomQuestion].question);console.log(questionAnswer);

window.alert('You answered ' + questionAnswer);
window.alert('The correct answer was ' + myQuestions[randomQuestion].answer);