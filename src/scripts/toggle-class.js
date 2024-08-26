document.querySelectorAll(".toggle-class-trigger").forEach((el) => {
  const targetEl = el.closest(".toggle-class-target") || document.getElementById(el.dataset.target);

  el.addEventListener("click", () => {
    targetEl.classList.toggle("active");

    if (targetEl.classList.contains("active")) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      removeDocumentClickListener();
    }
  });

  function handleDocumentClick(e) {
    if (!e.target.closest(".toggle-class-target") && e.target !== el) {
      targetEl.classList.remove("active");
      removeDocumentClickListener();
    }
  }

  function removeDocumentClickListener() {
    console.log("remove");
    document.removeEventListener("click", handleDocumentClick);
  }
});
