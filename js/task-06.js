const input = document.querySelector('input');
const inputValue = document.querySelector('#validation-input');
const totalLength = input.getAttribute('data-length')

inputValue.addEventListener('blur', evt => {
  const val = (evt.target.value);
  if (val.length === +totalLength){
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }

})