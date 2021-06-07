const incrBtn = document.querySelector("[data-action='increment']");
console.log(incrBtn);
const decrBtn = document.querySelector("[data-action='decrement']");
let counterValue = document.querySelector('#value');
console.log(counterValue);
let valueElem = Number(document.querySelector('#value').textContent);
console.log(valueElem);

incrBtn.addEventListener('click',  event => {
  valueElem += 1;
  counterValue.innerText = valueElem;
});

decrBtn.addEventListener('click', event => {
  valueElem -= 1;
  counterValue.innerText = valueElem;
})
