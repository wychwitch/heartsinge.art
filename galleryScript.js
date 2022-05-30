"use strict";

import waitForElementTransition from "./node_modules/wait-for-element-transition/dist/wait-for-element-transition.js";

const gallery = document.getElementById("gallery");

const imgModal = document.getElementById("image-modal");

const works3d = document.getElementById("render-gallery");

const works2d = document.getElementById("drawing-gallery");

const scaleIn = [{ transform: "scale(0)" }, { transform: "scale(1)" }];

const scaleOut = [{ transform: "scale(1)" }, { transform: "scale(0)" }];
const bgFadeIn = [
  {
    backgroundColor: "var(--modal-bg-transparent)",
  },
  {
    backgroundColor: "var(--modal-bg-color)",
  },
];
const bgFadeOut = [
  {
    backgroundColor: "var(--modal-bg-color)",
  },
  {
    backgroundColor: "var(--modal-bg-transparent)",
  },
];
const aniTiming = 150;
const easingIn = ["ease-in"];
const easingOut = ["ease-out"];

const galleryArray = Array.from(gallery.childNodes).filter(
  (n) => n.nodeName === "DIV"
);

const modalImg = imgModal.firstElementChild;

const display = function (pic) {
  const imgSrc = pic.firstElementChild.src;
  console.log(imgSrc);
  modalImg.src = imgSrc;

  imgModal.classList.remove("hidden");
  imgModal.animate(bgFadeIn, aniTiming, easingIn);
  modalImg.animate(scaleIn, aniTiming, easingOut);

  imgModal.addEventListener("click", closeImage);
};

const closeImage = async function (target) {
  console.log("hello??1");
  if (target.target !== modalImg) {
    console.log("hello??2");
    modalImg.animate(scaleOut, aniTiming, easingIn);
    imgModal.animate(bgFadeOut, aniTiming, easingOut);
    setTimeout(() => {
      console.log("hello??3");
      modalImg.src = "";
      imgModal.classList.add("hidden");
    }, aniTiming - 50);
  }
};

galleryArray.forEach((pic) => {
  pic.addEventListener("click", function () {
    display(pic);
  });
});

works3d.addEventListener("click", function () {
  console.log("aaa");
  const drawingWorks = Array.from(document.getElementsByClassName("drawing"));
  console.log({ drawingWorks });
  drawingWorks.forEach((img) => img.classList.toggle("hidden"));
  works3d.labels[0].classList.toggle("clicked");
});

works2d.addEventListener("click", function () {
  console.log("aaa");
  const renderWorks = Array.from(document.getElementsByClassName("render"));
  console.log({ renderWorks });
  renderWorks.forEach((img) => img.classList.toggle("hidden"));
  works2d.labels[0].classList.toggle("clicked");
});

//const img = pic.firstChild.src;
