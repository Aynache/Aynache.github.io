/* Mobile nav toggle */
const toggle = document.getElementById("menu-toggle");
const nav    = document.getElementById("navbar");

toggle?.addEventListener("click", () => {
  nav.classList.toggle("show");
});

/* Smooth-scroll for in-page links */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", e => {
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("show");   // close menu on mobile
    }
  });
});
