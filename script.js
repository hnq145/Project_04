// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

// Navbar Scroll Effect
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
    navbar.classList.remove("bg-light");
    navbar.classList.remove("border-bottom");
  } else {
    navbar.classList.remove("scrolled");
    navbar.classList.add("bg-light");
    navbar.classList.add("border-bottom");
  }
});
