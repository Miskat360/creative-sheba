function sideNavberOpenClose() {
  let sideNavbar = document.querySelector("#sideNavbar");
  document.querySelector("#hamburger_menu").addEventListener("click", () => {
    sideNavbar.classList.remove("hidden");
    sideNavbar.classList.add("block");
  });

  document
    .querySelector("#sideNavbarCloseBtn")
    .addEventListener("click", () => {
      sideNavbar.classList.remove("block");
      sideNavbar.classList.add("hidden");
    });
}
sideNavberOpenClose();
