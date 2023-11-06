const menuSelect = document.querySelector(".menu-item");
const menuParagraph = menuSelect.children;
const foodItem = document.querySelectorAll(".food-item");
const bookBtn = document.querySelector(".btn");
const modelBg = document.querySelector(".model-bg");
const close = document.querySelector(".close");

for (let i = 0; i < menuParagraph.length; i++) {
  menuParagraph[i].addEventListener("click", () => {
    for (let j = 0; j < menuParagraph.length; j++) {
      menuParagraph[j].classList.remove("active");
    }
    menuParagraph[i].classList.add("active");
    let filterValue = menuParagraph[i].getAttribute("data-filter");
    for (let k = 0; k < foodItem.length; k++) {
      if (filterValue === foodItem[k].getAttribute("data-category")) {
        foodItem[k].classList.remove("hide");
        foodItem[k].classList.add("show");
      } else {
        foodItem[k].classList.remove("show");
        foodItem[k].classList.add("hide");
      }
      if (filterValue === "all") {
        foodItem[k].classList.remove("hide");
        foodItem[k].classList.add("show");
      }
    }
  });
}

bookBtn.addEventListener("click", function (e) {
  modelBg.classList.add("bg-active");
  e.preventDefault();
});

close.addEventListener("click", (e) => {
  modelBg.classList.remove("bg-active");
  e.preventDefault();
});

const bars = document.querySelector(".burger");
const ul = document.querySelector(".nav-links");
const li = document.querySelectorAll(".nav-links li");

bars.addEventListener("click", (e) => {
  ul.classList.toggle("active");
  // bars.classList.toggle('toggle')
  e.preventDefault();
});
