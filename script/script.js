const titleBtnEl = document.querySelector(".title-btn");

titleBtnEl.addEventListener("click", function () {
  let name = prompt("Как тебя зовут?");
  alert(`${name} Начал(а) пользоваться бесплатно`);
});
