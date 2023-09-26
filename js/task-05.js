
const userInput = document.getElementById('name-input');
const userOutput = document.getElementById('name-output');

userInput.addEventListener('input', handlerInput);

function handlerInput(event){
    userOutput.textContent = userInput.value !== '' ? event.currentTarget.value : 'Anonymous';
        }
