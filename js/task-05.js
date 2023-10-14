const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const defaultValue = span.textContent;

inputRef.addEventListener("input", (event) => {
  const inputValue = event.target.value;

  spanRef.textContent = inputValue || defaultValue;
});
