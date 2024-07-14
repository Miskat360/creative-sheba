const sideNavberOpenClose = () => {
  let sideNavbar = document.querySelector("#sideNavbar");
  document.querySelector("#hamburger_menu").addEventListener("click", () => {
    sideNavbar.classList.remove("hidden");
  });

  document
    .querySelector("#sideNavbarCloseBtn")
    .addEventListener("click", () => {
      sideNavbar.classList.add("hidden");
    });
};
sideNavberOpenClose();

const topNavbar = () => {
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
};
topNavbar();
const megaMenuOpenClose = () => {
  let navProjectMenu = document.querySelector("#navProjectMenu");
  console.log(navProjectMenu);
  let megaMenu = document.querySelector("#megaMenu");
  navProjectMenu.addEventListener("mouseover", () => {
    megaMenu.classList.remove("-top-full");
  });
  navProjectMenu.addEventListener("mouseout", () => {
    megaMenu.classList.add("-top-full");
  });
  megaMenu.addEventListener("mouseover", () => {
    megaMenu.classList.remove("-top-full");
  });

  megaMenu.addEventListener("mouseout", () => {
    megaMenu.classList.add("-top-full");
  });
};
megaMenuOpenClose();
const feedbackSwiper = () => {
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
feedbackSwiper();
