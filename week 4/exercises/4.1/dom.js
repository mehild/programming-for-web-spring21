const myEmptyDiv = document.querySelector('#myEmptyDiv');

//heading element
const heading = document.createElement('h1');

heading.innerHTML = 'Llamas are the camel’s hippie cousins. They belong to a group of animals called camelids that also includes alpacas. All camelids spit or stick out their tongue when they are annoyed.';

//dom
heading.addEventListener('click', handleHeadingClick); 

//etc
myEmptyDiv.appendChild(heading);

//background
function handleHeadingClick () {
    document.body.style.backgroundColor = '#B28CFE';
  }