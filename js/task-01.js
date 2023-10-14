const list = document.querySelectorAll(".item");
console.log("Number of categories:", list.length);

list.forEach((el) => {
  console.log(
    `Category: ${el.firstElementChild.textContent}\nElements: ${el.lastElementChild.children.length}`
  );
});
