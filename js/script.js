const badges = document.querySelectorAll(".badge");
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const closeIcon = document.querySelector("#close-icon");
const menuIcon = document.querySelector("#menu-icon");

// Show and Hide the time of the drink prepation
badges.forEach((badge) => {
  const span = badge.querySelector("span");

  // Show the span on mouseover
  badge.addEventListener("mouseover", () => {
    span.classList.remove("hidden");
    span.classList.add("block");
  });

  // Hide the span on mouseout
  badge.addEventListener("mouseout", () => {
    span.classList.remove("block");
    span.classList.add("hidden");
  });
});

// Mobile Navbar logic
burger.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    closeIcon.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  } else {
    menu.classList.add("hidden");
    closeIcon.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  }
});
