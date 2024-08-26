const btnOrderMainEl = document.getElementById("btn-order-main");
const stickyCoef = .5; // 0 - no sticky effect; 1 - button could moved to any place on the page
let btnOrderMainCenterTop;
let btnOrderMainCenterLeft;

getBtnOrderMainCenterPos();

btnOrderMainEl.addEventListener("mousemove", (e) => {
  btnOrderMainEl.style.transform = `translate(${(e.clientX - btnOrderMainCenterLeft) * stickyCoef}px, ${(e.clientY - btnOrderMainCenterTop) * stickyCoef}px)`;
});

btnOrderMainEl.addEventListener("mouseleave", () => {
  btnOrderMainEl.style.transform = "translate(0, 0)";
});

window.addEventListener("resize", getBtnOrderMainCenterPos);

function getBtnOrderMainCenterPos() {
  btnOrderMainCenterTop = btnOrderMainEl.offsetTop + btnOrderMainEl.offsetHeight / 2;
  btnOrderMainCenterLeft = btnOrderMainEl.offsetLeft + btnOrderMainEl.offsetWidth / 2;
}