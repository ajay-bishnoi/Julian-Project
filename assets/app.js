"use strict";
function openNav() {
  document.querySelector(".closeNav").classList.toggle("start-0");
  document.querySelector("body").classList.toggle("overflow_hide");
  document.querySelector(".menu").classList.toggle("cross");
}

function navWorking() {
  if (window.innerWidth < 992) {
    document.querySelector("body").classList.remove("overflow_hide");
    document.querySelector(".closeNav").classList.toggle("start-0");
    document.querySelector(".menu").classList.toggle("cross");
  }
}

$(".mySlider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  slidesToScroll: 1,
  prevArrow: ".prev",
  nextArrow: ".next",
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2200,
        infinite: true,
        dots: false,
      },
    },
  ],
});

// Navtabs//
function showTab(index) {
  const tabs = document.querySelectorAll(".tab-content");
  const tabBtns = document.querySelectorAll(".tab-btn");
  tabs.forEach((tab) => tab.classList.add("d-none"));
  tabBtns.forEach((btn) => btn.classList.remove("active", "shadowbg"));
  tabs[index].classList.remove("d-none");
  tabBtns[index].classList.add("active", "shadowbg");
}
showTab(0);

// Navtabs-2//
function showTab2(index) {
  const tabs = document.querySelectorAll(".tabtwo-content");
  const tabBtns = document.querySelectorAll(".tabtwo-btn");
  tabs.forEach((tab) => tab.classList.add("d-none"));
  tabBtns.forEach((btn) =>
    btn.classList.remove("active", "borderRight-gradient")
  );
  tabs[index].classList.remove("d-none");
  tabBtns[index].classList.add("active", "borderRight-gradient");
}
showTab2(0);

// backto top
let mybutton = document.getElementById("myBtn");
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  if (window.innerWidth < 992 && window.scrollY > 650) {
    mybutton.setAttribute("style", "display: flex;");
  } else if (window.innerWidth >= 992 && window.scrollY > 200) {
    mybutton.setAttribute("style", "display: flex;");
  } else {
    mybutton.setAttribute("style", "display: none;");
  }
});
