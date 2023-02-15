const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector("#ingredients");
console.log(ingredientsRef);

const makeIngredient = () => {
  ingredients.forEach(ingredient => {
    const ingredientRef = document.createElement("li");
    ingredientRef.classList.add("item");
    ingredientRef.textContent = ingredient;

    ingredientsRef.appendChild(ingredientRef);
  })
};

makeIngredient();