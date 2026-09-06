document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger");
  const nav = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".nav-links li");
  const contactForm = document.getElementById("contactForm");

  // Mobile Menu Toggle
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
      }
    });

    // Burger Animation
    burger.classList.toggle("toggle");
  });

  // Close Mobile Menu on Link Click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((l) => (l.style.animation = ""));
      }
    });
  });

  // Simple Form Submission Handler
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I will get back to you soon.");
    contactForm.reset();
  });
});
