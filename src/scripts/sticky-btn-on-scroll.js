// Sticky button hiding

document.addEventListener("scroll", handleDocumentScrollForOrderBtn);

const cleaningSliderEl = document.getElementById("cleaning__slider");

function handleDocumentScrollForOrderBtn() {
  if (window.scrollY + document.documentElement.clientHeight  > cleaningSliderEl.offsetTop) {
    document.body.classList.add("is-scrolled-to-cleaning__slider");
  } else {
    document.body.classList.remove("is-scrolled-to-cleaning__slider");
  }
}
// For page refresh
handleDocumentScrollForOrderBtn();