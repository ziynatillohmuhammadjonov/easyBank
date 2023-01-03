const toglerBtn = document.querySelector(".togler-open");
const wrapper = document.querySelector(".wrapper");
// const showwrapper = document.querySelector(".show-wrapper");
const cover = document.querySelector(".cover");

toglerBtn.addEventListener("click", () => {
  wrapper.classList.toggle("show-wrapper");
  cover.classList.toggle("show-cover");
});
