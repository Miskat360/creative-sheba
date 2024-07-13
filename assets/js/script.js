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

function topNavbar() {
  let navbar = document.querySelector("#navbar");

  window.onscroll = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.classList.add("navScrollEfect");
    } else {
      navbar.classList.remove("navScrollEfect");
    }
  };
}
topNavbar();
