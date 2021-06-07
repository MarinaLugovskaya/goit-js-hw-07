const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');
const ElIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li"); 
  items.append(ingredient);
  ingredientsList.append(items);
});
