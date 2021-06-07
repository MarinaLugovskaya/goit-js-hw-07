const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputValue.addEventListener("input", event => {
  const fontSize = inputValue.value;
  text.style.fontSize = fontSize + "px";
});
