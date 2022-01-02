const number = 256;

for (i=1; i<number+1; i++) {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = i;
    container.appendChild(content); 

}   



const contents = document.querySelectorAll('div');
contents.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('black');
  });
});