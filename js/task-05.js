let nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.oninput = function () {
  if (nameInput.value === '') {
     nameOutput.innerHTML = 'незнакомец';
  } else{
  nameOutput.innerHTML = nameInput.value;
  }
}