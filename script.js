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

//black button
const blackButton = document.querySelector('#blackButton');
blackButton.addEventListener('click', () => {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('red');
      div.classList.remove('blue');
      div.classList.add('black');
    });
  });
});

//blue button
const blueButton = document.querySelector('#blueButton');
blueButton.addEventListener('click', () => {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('red');
      div.classList.remove('black');
      div.classList.add('blue');
    });
  });
});

//red button
const redButton = document.querySelector('#redButton');
redButton.addEventListener('click', () => {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.remove('black');
      div.classList.remove('blue');
      div.classList.add('red');
    });
  });
});

//erases board
const eraseButton = document.querySelector('#eraseButton');
eraseButton.addEventListener('click', () => {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
      div.classList.remove('black');
      div.classList.remove('blue');
      div.classList.remove('red');
  });
});




/*
THIS IS THE FUNCTION FOR CREATING A RANDOM COLOR
    function createColor() {
      const randomColor = Math.floor(Math.random()*16777215).toString(16)
      return('#'+randomColor);
      }
      console.log(createColor());
*/





   
  