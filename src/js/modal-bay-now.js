(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-bay-now]"),
    closeModalBtn: document.querySelector("[data-modal-close-bay-now]"),
    modal: document.querySelector("[data-modal-bay-now]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalBayNow);
  refs.closeModalBtn.addEventListener("click", toggleModalBayNow);

  function toggleModalBayNow() {
    refs.modal.classList.toggle("is-hidden");
  }
})();