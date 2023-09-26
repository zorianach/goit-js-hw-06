
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpan = document.querySelector('.color');
const colorButton = document.querySelector('.change-color')
const bodyRef = document.body;



const changeColor =() => {
    colorSpan.textContent = getRandomHexColor();
    bodyRef.style.backgroundColor = colorSpan.textContent;
}

colorButton.addEventListener("click", changeColor);