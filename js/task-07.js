
const controlField = document.getElementById('font-size-control');
const textField = document.getElementById('text');

controlField.addEventListener('input', fontSizeControl);

function fontSizeControl(event){
    textField.style.fontSize = event.currentTarget.value + 'px';
    // console.log(textField.style.fontSize);
}