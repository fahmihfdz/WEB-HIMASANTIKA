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
    behavior: "smooth"
  });
}