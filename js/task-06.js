
const inputField = document.getElementById('validation-input');

inputField.addEventListener("blur", validateInput);

function validateInput(event){
    const inputDataLength = Number(inputField.dataset.length);
    const inputValueLength = Number(inputField.value.length);

    if(inputDataLength === inputValueLength){
        inputField.classList.add('valid');
        inputField.classList.remove('invalid');
    }
    else{
        inputField.classList.remove('valid');
        inputField.classList.add('invalid');
    }
}