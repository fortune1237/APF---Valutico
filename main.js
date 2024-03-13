let mobileMenu = document.querySelector(".fa-bars");
let navLinks = document.querySelector(".navLinks");
let mobileClose = document.querySelector(".fa-times");

mobileMenu.onclick = () => {
  navLinks.classList.add("active");
};

mobileClose.onclick = () => {
  navLinks.classList.remove("active");
};
