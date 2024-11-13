const loginBtnLink = document.querySelector(".LoginBtn-link");
const registerBtnLink = document.querySelector(".RegisterBtn-link");
const wrapper = document.querySelector(".wrapper");

registerBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
loginBtnLink.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});