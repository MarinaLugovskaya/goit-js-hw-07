const input = document.querySelector('input');
const inputValue = document.querySelector('#validation-input');
const totalLength = Number(input.getAttribute('data-length'));

function updateClass( addClass, remClass) {
  input.classList.remove(remClass);
  input.classList.add(addClass);
  }
  
  inputValue.addEventListener('blur', evt => {
  const val = (evt.target.value);
  if (val.length === totalLength) {
  updateClass("valid", "invalid");
  } else {
  updateClass("invalid", "valid");
  }
  });