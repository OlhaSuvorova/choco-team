(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-about]"),
    closeModalBtn: document.querySelector("[data-modal-close-about]"),
    modal: document.querySelector("[data-modal-about]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModalAbout);
  refs.closeModalBtn.addEventListener("click", toggleModalAbout);

  function toggleModalAbout() {
    refs.modal.classList.toggle("is-hidden");
  }
})();