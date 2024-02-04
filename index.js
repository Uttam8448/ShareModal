const clickFollow = document.querySelector(".clickFollow");
const cancel= document.querySelector(".cancel");
const overlay = document.querySelector(".overlay");

const openModal = () => {
  console.log("Modal is Open");
  setTimeout(function(){
    clickFollow.classList.remove("modal");
  },150);
  document.querySelector('.cardContainer').style.opacity=0.2;
  overlay.classList.add("overlayactive");
};
// Modal close function
const closeModal = () => {
  clickFollow.classList.add("modal");
  document.querySelector('.cardContainer').style.opacity=1;
  overlay.classList.remove("overlayactive");
};