const wrap = document.querySelector(".wrap");
const header = document.querySelector("header");

// scroll top
wrap.addEventListener("scroll", function () {
  const scroll = wrap.scrollTop;
  header.classList.toggle("active", scroll > 0);
});
