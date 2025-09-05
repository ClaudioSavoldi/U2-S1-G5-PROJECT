const header = document.querySelector("header.noMargin");
window.addEventListener("scroll", function () {
  if (window.scrollY > 480) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
