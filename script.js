/* ===== Mobile nav toggle ===== */
const toggleBtn = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
  toggleBtn.classList.toggle("open");
});

/* ===== Close nav on link click (mobile) ===== */
nav.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => nav.classList.remove("open"))
);

/* ===== Scroll‑fade animation (IntersectionObserver) ===== */
const faders = document.querySelectorAll(".section, .card");
const appearOptions = { threshold: 0.1 };

const appearOnScroll = new IntersectionObserver(function(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("in-view");
    obs.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(el => appearOnScroll.observe(el));
