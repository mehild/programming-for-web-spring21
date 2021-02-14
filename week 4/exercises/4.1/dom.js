const myEmptyDiv = document.querySelector('#myEmptyDiv');

const heading = document.createElement('h1');

heading.innerHTML = 'Llamas are the camel’s hippie cousins. They belong to a group of animals called camelids that also includes alpacas. All camelids spit or stick out their tongue when they are annoyed.';

heading.addEventListener('click', handleHeadingClick); 

myEmptyDiv.appendChild(heading);

function handleHeadingClick () {
    document.body.style.backgroundColor = '#B28CFE';
  }