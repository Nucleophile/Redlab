// Slider logic
const sliderEl = document.getElementById("cleaning__slider");
const sliderSidebarEl = document.getElementById("cleaning__slider-sidebar");
const slidesElsArr = [...sliderEl.querySelectorAll(".cleaning__slider-slide")];
const sliderBtnsArr = [...sliderEl.querySelectorAll(".cleaning__slider-sidebar-btn")];
let activeSlideEl = slidesElsArr.filter((el) => el.classList.contains("active"))[0];
let activeBtn = sliderBtnsArr.filter((el) => el.classList.contains("active"))[0];

document.querySelectorAll(".cleaning__slider-sidebar-btn").forEach((el) => {
  el.addEventListener("click", () => {
    // Change active slide
    activeSlideEl.classList.remove("active");
    activeSlideEl = slidesElsArr.filter((slideEl) => slideEl.id === el.dataset.slideId)[0];
    activeSlideEl.classList.add("active");
    // Change active button
    activeBtn.classList.remove("active");
    activeBtn = el;
    activeBtn.classList.add("active");

    sliderSidebarEl.classList.contains("active") && sliderSidebarEl.classList.remove("active"); // To hide panel on mobile
  });
});

window.addEventListener("load",  () => {
  // Slider default view preparations
  const contentWidthAndPosExampleEl = document.getElementById("content-width-and-pos-example");
  const sliderImageBlock = sliderEl.querySelector("#cleaning__slider-image-block");

  positionSliderPreview();

  window.addEventListener("resize", positionSliderPreview);

  function positionSliderPreview() {
    sliderImageBlock.style.transform = `translate(${contentWidthAndPosExampleEl.offsetLeft - sliderImageBlock.offsetLeft}px, -50px) scale(${contentWidthAndPosExampleEl.offsetWidth / sliderImageBlock.offsetWidth})`;
  }
  // On scrolling logic
  document.addEventListener("scroll", handleDocumentScrollForCleaningSlider);

  function handleDocumentScrollForCleaningSlider() {
    if (window.scrollY + document.documentElement.clientHeight > sliderEl.offsetTop + sliderEl.offsetHeight / 2) {
      sliderEl.classList.add("active");
    } else {
      sliderEl.classList.remove("active");
    }
  }
  // For page refresh
  handleDocumentScrollForCleaningSlider();
});
