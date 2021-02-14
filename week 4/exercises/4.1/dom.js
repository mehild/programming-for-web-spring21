const myEmptyDiv = document.querySelector('#myEmptyDiv');

//heading
const heading = document.createElement('h1');

heading.innerHTML = 'Llamas are the camel’s hippie cousins.';

//dom
heading.addEventListener('click', handleHeadingClick); 

//etc
myEmptyDiv.appendChild(heading);

//background
function handleHeadingClick () {
    document.body.style.backgroundColor = '#B28CFE';
  }