const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const ingredientsList = document.querySelector('#ingredients');
// const  ElIngredients = ingredients.map(ingredient => {
//   let items = document.createElement("li"); 
//   items.append(ingredient);
//   ingredientsList.append(items);
// });

const listIngredients = ingredients.map(ingredient => {
  const items = document.createElement('li');
  items.textContent = ingredient;
  return items;
});
const list = document.querySelector('ul');
list.append(...listIngredients);