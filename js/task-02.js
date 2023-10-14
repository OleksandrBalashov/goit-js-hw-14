const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const root = document.querySelector("#ingredients");

const ingredientList = ingredients.map((el) => {
  const item = document.createElement("li");
  item.textContent = el;
  item.className = "item";

  return item;
});

root.append(...ingredientList);
