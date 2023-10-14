const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

const defaultValue = spanRef.textContent;

inputRef.addEventListener("input", ({ target: { value } }) => {
  spanRef.textContent = value || defaultValue;
});
