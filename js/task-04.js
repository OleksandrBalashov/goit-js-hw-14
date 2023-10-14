let counterValue = 0;

const refs = {
  incrementRef: document.querySelector('button[data-action="increment"]'),
  decrementRef: document.querySelector('button[data-action="decrement"]'),
  spanRef: document.querySelector("#value"),
};

refs.spanRef.textContent = counterValue;

refs.incrementRef.addEventListener("click", () => {
  counterValue += 1;
  refs.spanRef.textContent = counterValue;
});

refs.decrementRef.addEventListener("click", () => {
  counterValue -= 1;
  refs.spanRef.textContent = counterValue;
});
