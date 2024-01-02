import "../scss/styles.scss";
import * as bootstrap from "bootstrap";

window.addEventListener("DOMContentLoaded", (event) => {
  checkWidth();
  window.addEventListener("resize", checkWidth);
});

function checkWidth() {
  const windowSize = window.innerWidth;
  const navbar = document.getElementById("roundedRemove");

  if (windowSize <= 768) {
    if (navbar.classList.contains("rounded-pill")) {
      navbar.classList.remove("rounded-pill");
      navbar.classList.remove("opacity-75");
    }
  } else {
    if (!navbar.classList.contains("rounded-pill")) {
      navbar.classList.add("rounded-pill");
      navbar.classList.add("opacity-75");
    }
  }
}
