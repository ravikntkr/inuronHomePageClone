const humburger = document.querySelector(".humburger");
const menu = document.querySelector(".main-menu-mobile");

humburger.addEventListener("click", () => {
  humburger.classList.toggle("active");
  menu.classList.toggle("active");
});
