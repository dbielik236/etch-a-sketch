//creates the grid
const number = 10000;

for (i=1; i<number+1; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content); 
}
 
//default black
const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('black');
    });
  });

function drawBlack() {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('red');
      div.classList.remove('blue');
      div.classList.add('black');
    });
  });
}

function drawBlue() {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('red');
      div.classList.remove('black');
      div.classList.add('blue');
    });
  });
}

function drawRed() {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('black');
      div.classList.remove('blue');
      div.classList.add('red');
    });
  });
}

function eraseBoard() {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
      div.classList.remove('black');
      div.classList.remove('blue');
      div.classList.remove('red');
  });
}

/*
THIS IS THE FUNCTION FOR CREATING A RANDOM COLOR
    function createColor() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16)
      return('#'+randomColor);
      }
      console.log(createColor());
*/





   
  