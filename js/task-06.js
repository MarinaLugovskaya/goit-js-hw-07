const input = document.querySelector('input');
const inputValue = document.querySelector('#validation-input');
const totalLength = input.getAttribute('data-length')

function value1(valid){
  input.classList.add('valid');
  input.classList.remove('invalid');
};

function value2(invalid){
  input.classList.remove('valid');
  input.classList.add('invalid'); 
}


inputValue.addEventListener('blur', evt => {
  const val = (evt.target.value);
  if (val.length === +totalLength){
value1();

  } else {
value2();
  }

})