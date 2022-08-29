"use strict";

var isOpen = false;
$("#hamburger").on("click", function () {
  isOpen = !isOpen;
  $("#nav-menu").css("display", isOpen ? "block" : "none");
});
//# sourceMappingURL=all.js.map
