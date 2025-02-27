const barIcon = document.querySelector(".bar-icon");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-item");
const logo = document.querySelector(".logo");
const content = document.querySelector(".content"); // Get the content element

barIcon.addEventListener("click", () => {
  const isHidden = navbar.classList.toggle("hidden");
  navItems.forEach((item) => {
    item.classList.toggle("hidden");
  });
  logo.classList.toggle("hidden");

  // Toggle hidden class on content
  content.classList.toggle("hidden");

  // Add transition effect
  navbar.classList.add("transition");
  navItems.forEach((item) => {
    item.classList.add("transition");
  });
  logo.classList.add("transition");

  // Remove transition class after 300ms
  setTimeout(() => {
    navbar.classList.remove("transition");
    navItems.forEach((item) => {
      item.classList.remove("transition");
    });
    logo.classList.remove("transition");
  }, 300);
});

const checkScreenSize = () => {
  const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;
  if (isSmallScreen) {
    navbar.classList.add("hidden");
    navItems.forEach((item) => {
      item.classList.add("hidden");
    });
    logo.classList.add("hidden");
    content.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
    navItems.forEach((item) => {
      item.classList.remove("hidden");
    });
    logo.classList.remove("hidden");
    content.classList.remove("hidden");
  }
};

checkScreenSize(); // Check screen size on load

window.addEventListener("resize", checkScreenSize); // Check screen size on resize
