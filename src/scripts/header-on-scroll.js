// Header background logic

document.addEventListener("scroll", handleDocumentScrollForHeader);

function handleDocumentScrollForHeader() {
  if (window.scrollY > 0) {
    document.body.classList.add("is-scrolled");
  } else {
    document.body.classList.remove("is-scrolled");
  }
}
// For page refresh
handleDocumentScrollForHeader();
