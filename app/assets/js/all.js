let isOpen = false;
$("#hamburger").on("click", () => {
  isOpen = !isOpen;
  $("#nav-menu").css("display", isOpen ? "block" : "none");
});