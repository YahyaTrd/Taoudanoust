const linksContainer = document.querySelector(".links-container");
const scrollLinks = document.querySelectorAll(".scroll-link");
const navToggle = document.querySelector(".nav-toggle");
const centerNav = document.querySelector(".nav-center");
const bluring = document.querySelectorAll(".blury");
const back = document.getElementById("scroll-top");
const date = document.querySelector(".date");
const nav = document.getElementById("nav");
const pic = document.querySelector(".vPic");
const control = document.querySelectorAll(".btn");
const radios = document.querySelectorAll(".input");
const titleInfo = document.querySelector(".titleInfo");
const radioss = document.querySelectorAll(".allRadios");
const descriptionInfo = document.querySelector(".desciptionInfo");
const mainOverlay = document.getElementById("mainOverlay");

var mood = "open";
navToggle.addEventListener("click", function () {
  centerNav.classList.toggle("mynav");
  linksContainer.classList.toggle("active");
  bluring.forEach(function (el) {
    el.classList.toggle("TheBlur");
  });
  if (mood === "open") {
    navToggle.innerHTML = '<i class="fa-solid fa-rectangle-xmark"></i>';
    nav.style.background = "rgba(0, 0, 0, 0.95)";
    mainOverlay.style.zIndex = "100";
    mood = "close";
  } else {
    navToggle.innerHTML = '<i class="bars fa-solid fa-bars"></i>';
    mainOverlay.style.zIndex = "0";
    mood = "open";
  }
});

mainOverlay.addEventListener("click", function () {
  centerNav.classList.remove("mynav");
  linksContainer.classList.remove("active");
  navToggle.innerHTML = '<i class="bars fa-solid fa-bars"></i>';
  mainOverlay.style.zIndex = "0";
  bluring.forEach(function (el) {
    el.classList.remove("TheBlur");
  });
  mood = "open";
});
