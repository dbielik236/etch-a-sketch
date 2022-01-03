//creates the grid
const number = 10000;

for (i=1; i<number+1; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    container.appendChild(content); 

}   


//draws the black
const contents = document.querySelectorAll('div');
contents.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('black');
  });
});


//erases board
const eraseButton = document.querySelector('#eraseButton');
eraseButton.addEventListener('click', () => {
  const contents = document.querySelectorAll('div');
  contents.forEach((div) => {
      div.classList.remove('black');
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




   
  