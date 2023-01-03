const toglerBtn = document.querySelector(".togler-open");
const wrapper = document.querySelector(".wrapper");
// const showwrapper = document.querySelector(".show-wrapper");
const toggleBtnImg = document.querySelector(".togler-open__img");
const cover = document.querySelector(".cover");

toglerBtn.addEventListener("click", () => {
  wrapper.classList.toggle("show-wrapper");
  cover.classList.toggle("show-cover");
  if (wrapper.classList.contains("show-wrapper")) {
    toggleBtnImg.src = "./images/toggler-close.svg";
  } else {
    toggleBtnImg.src = "./images/toggler-open.svg";
  }
});
