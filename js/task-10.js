function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('.controls');
const numberInput = document.querySelector('[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const divBox = document.getElementById('boxes');

numberInput.addEventListener('input', valueInput);
createButton.addEventListener('click', () => {      createBoxes(numberInput.value)
});
destroyButton.addEventListener('click', destroyBoxes);

function valueInput(event) {
  let value = 0;
  value = event.currentTarget.value;
  console.log(value);
}

function createBoxes(amount) {
  const boxesArr = [];
  let boxSize = 30;
  for (let i=0; i < amount; i+=1){
    boxSize += 10 * i;
    const div = `<div class="item" style="display: block; margin-right: 30px; margin-bottom: 30px;background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`;
    boxesArr.push(div);
  }
  divBox.insertAdjacentHTML('beforeend', boxesArr.join(''));
}

function destroyBoxes(){
  numberInput.value = '';
  divBox.innerHTML = '';
}