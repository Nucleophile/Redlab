// Features animation

document.addEventListener("scroll", handleDocumentScrollForFeatures);

const featuresListEl = document.getElementById("features-list");

function handleDocumentScrollForFeatures() {
  if (window.scrollY + document.documentElement.clientHeight > featuresListEl.offsetTop) {
    featuresListEl.classList.add("is-shown");
  }
}
// For page refresh
handleDocumentScrollForFeatures();
