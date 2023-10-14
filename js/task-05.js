const inputRef = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const defaultValue = span.textContent;

inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  span.textContent = inputValue || defaultValue;
});
