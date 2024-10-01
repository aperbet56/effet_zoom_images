// Récupération des éléments HTML5
const modalContainer = document.querySelector("#modal__container");
const modalContent = document.querySelector("#modal__content");
const modalImage = document.querySelector(".modal__image");
const zoomImage = document.querySelector(".zoom");

// Ecoute de l'événement "click"
zoomImage.addEventListener("click", () => {
  modalImage.src = zoomImage.src;
  modalContainer.style.display = "block";
});

// Ecoute de l'événement "click"
modalContainer.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
