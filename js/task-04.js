
let counterValue = 0;
const valueRef = document.getElementById('value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');


const onClickDecrementButton = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
}
const onClickIncrementButton = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

decrementButton.addEventListener('click', onClickDecrementButton);
incrementButton.addEventListener('click', onClickIncrementButton);