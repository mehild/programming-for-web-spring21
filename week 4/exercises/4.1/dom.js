const myEmptyDiv = document.querySelector('#myEmptyDiv');

const heading = document.createElement('h1');

heading.innerHTML = 'Llamas are the camel’s hippie cousins.';

heading.style.cursor = 'pointer';

heading.addEventListener('click', handleHeadingClick); 

myEmptyDiv.appendChild(heading);

//background
function handleHeadingClick () {
    document.body.style.backgroundColor = '#B28CFE';
  }