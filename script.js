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

// Stats Counter Animation
const counters = document.querySelectorAll(".counter");
const speed = 200; // The lower the slower

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;

      // Lower inc to slow and higher to slow
      const inc = target / speed;

      if (count < target) {
        // Add inc to count and output in counter
        counter.innerText = Math.ceil(count + inc);
        // Call function every ms
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
        // Append + or % if needed based on context, but detailed in HTML usually better
        if (counter.nextElementSibling.innerText.includes("%")) {
          // handled by text
        }
      }
    };
    updateCount();
  });
};

// Trigger animation when stats section is in view
let statsPlayed = false;
const statsSection = document.querySelector(".counter")?.closest("section");

if (statsSection) {
  window.addEventListener("scroll", () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;

    if (sectionPos < screenPos && !statsPlayed) {
      animateCounters();
      statsPlayed = true;
    }
  });
}

// Back to Top Button
const btnBackToTop = document.getElementById("btn-back-to-top");

if (btnBackToTop) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnBackToTop.classList.add("show");
    } else {
      btnBackToTop.classList.remove("show");
    }
  });

  btnBackToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Countdown Timer
const countdown = document.getElementById("countdown");
if (countdown) {
  // Set deadline to 2 days from now
  const deadline = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);

  const updateCountdown = () => {
    const now = new Date().getTime();
    const gap = deadline - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(gap / day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute);
    const s = Math.floor((gap % minute) / second);

    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    if (daysEl) daysEl.innerText = d < 10 ? "0" + d : d;
    if (hoursEl) hoursEl.innerText = h < 10 ? "0" + h : h;
    if (minutesEl) minutesEl.innerText = m < 10 ? "0" + m : m;
    if (secondsEl) secondsEl.innerText = s < 10 ? "0" + s : s;
  };

  setInterval(updateCountdown, 1000);
}

// Cookie Banner
const cookieBanner = document.getElementById("cookie-banner");
const acceptCookiesBtn = document.getElementById("accept-cookies");

if (cookieBanner && !localStorage.getItem("cookiesAccepted")) {
  setTimeout(() => {
    cookieBanner.style.display = "block";
  }, 1000);

  acceptCookiesBtn.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
}

// Pricing Modal Logic
const pricingModal = document.getElementById("pricingModal");
if (pricingModal) {
  pricingModal.addEventListener("show.bs.modal", (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const plan = button.getAttribute("data-plan");
    // Update the modal's content.
    const modalTitle = pricingModal.querySelector("#modalPlanName");

    if (modalTitle) modalTitle.textContent = `${plan} Plan`;
  });
}
