
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Open and close the mobile navigation menu
menuBtn.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("open");

  menuBtn.setAttribute("aria-expanded", isOpen);
  menuBtn.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuBtn.textContent = isOpen ? "✕" : "☰";
});

// Close the menu after clicking a navigation link
document.querySelectorAll("#navLinks a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");
    menuBtn.textContent = "☰";
  });
});

// Automatically display the current year
document.getElementById("year").textContent =
  new Date().getFullYear();
