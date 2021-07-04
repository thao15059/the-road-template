document.querySelectorAll(".navigation-button").forEach((item) => {
  item.onclick = () => {
    item.parentElement.parentElement.classList.toggle("change");
  };
});

document.querySelectorAll(".nav-link").forEach((item) => {
  item.style.cssText = `background-color: ${item.getAttribute("data-color")}`;
});

const container = document.querySelector(".container");

document.querySelector(".open-navbar-icon").addEventListener("click", () => {
  container.classList.add("change");
  document.body.classList.add("stop-scrolling");
});

document.querySelector(".close-navbar-icon").addEventListener("click", () => {
  container.classList.remove("change");
  document.body.classList.remove("stop-scrolling");
});
