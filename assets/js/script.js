const backToTopButton = document.getElementById("back-to-top");
const header = document.getElementById("header");

window.onscroll = function () {
  const headerHeight = header.offsetHeight;

  if (document.documentElement.scrollTop > headerHeight) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
