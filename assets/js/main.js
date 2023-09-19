/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeader);

/*=============== SWIPER POPULAR ===============*/
var swiper = new Swiper(".popular__carousel", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");

  if (this.scrollY >= 350) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "bx-sun";

// if user selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  document.body.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeBtn.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"];
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: false,
});

sr.reveal(`.home_title`);
sr.reveal(`.home__description`, { delay: 200 });
sr.reveal(`.home__search`, { delay: 300 });
sr.reveal(`.home__value`, { delay: 400 });
sr.reveal(`.home__images`, { delay: 500, origin: "bottom" });
sr.reveal(`.value__images, .contact__content`, { origin: "left" });
sr.reveal(`.value__content, .contact__images`, { origin: "right" });

/*=============== POPUP ===============*/

const openPopupButtons = document.querySelectorAll("[data-modal-target]");
const closePopupButtons = document.querySelectorAll("[data-close-button]");

const overlay = document.getElementById("overlay");

openPopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = document.querySelector(button.dataset.modalTarget);
    openModal(popup);
  });
});

closePopupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const popup = button.closest(".popup");
    closeModal(popup);
  });
});

overlay.addEventListener("click", () => {
  const popups = document.querySelectorAll(".popup.active");
  popups.forEach((popup) => {
    closeModal(popup);
  });
});
overlay.addEventListener("scroll", () => {
  
});

function openModal(popup) {
  if (popup == null) return;
  popup.classList.add("active");
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(popup) {
  if (popup == null) return;
  popup.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}
