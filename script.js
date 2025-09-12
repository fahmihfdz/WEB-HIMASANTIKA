// fungsi tombol
const loginBtns = document.querySelectorAll(".btn_join");
const backdrop = document.getElementById("backdrop");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");

function openModal() {
  backdrop.classList.add("show");
  backdrop.setAttribute("aria-hidden", "false");
  okBtn.focus();
}

function closeModal() {
  backdrop.classList.remove("show");
  backdrop.setAttribute("aria-hidden", "true");
}

// event ke tombol join
loginBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    openModal();
  });
});

closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);

backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && backdrop.classList.contains("show")) {
    closeModal();
  }
});

// fungsi humberger menu
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

// fungsi panah divisi
function scrollDivisions(direction) {
  const container = document.getElementById("divisions");
  const scrollAmount = 280;
  container.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

// Toggle menu untuk mobile (jika nanti dibuat hamburger)
const navLinks = document.querySelectorAll(".nav_link");

// Highlight active link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((l) => l.classList.remove("active_link"));
    link.classList.add("active_link");
  });
});

// Optional: smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
