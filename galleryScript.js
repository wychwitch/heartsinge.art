"use strict";

const gallery = document.getElementById("gallery");

const imgModal = document.getElementById("image-modal");

const works3d = document.getElementById("render-gallery");

const works2d = document.getElementById("drawing-gallery");

const indexSection = document.getElementById("index");

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

const aniTiming = 100;
const easingIn = ["cubic-bezier(0.250, 0.460, 0.450, 0.940)"];
const easingOut = ["cubic-bezier(0.250, 0.460, 0.450, 0.940)"];

const modalImg = imgModal.firstElementChild;

works3d.checked = false;
works2d.checked = false;

const getModalImgs = function () {
  const grids = document.getElementsByClassName("img-grid");
  const gridsArray = Array.from(grids);
  let images = [];
  for (const grid of gridsArray) {
    const gridImageDivs = Array.from(grid.childNodes).filter(
      (n) => n.nodeName === "DIV"
    );
    images = [...gridImageDivs, ...images];
  }
  return images;
};

const modalImageArray = getModalImgs();

const hideOtherGalleries = function (className) {
  const renderWorks = Array.from(document.getElementsByClassName(className));
  console.log({ renderWorks });

  modalImageArray.forEach((img) =>
    img.animate(
      {
        opacity: [1, 0],
      },
      200
    )
  );
  setTimeout(() => {
    renderWorks.forEach((img) => img.classList.toggle("hidden"));
    modalImageArray.forEach((img) =>
      img.animate(
        {
          opacity: [0, 1],
        },
        200
      )
    );
  }, 150);
};

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

modalImageArray.forEach((pic) => {
  pic.addEventListener("click", function () {
    display(pic);
  });
});

works3d.addEventListener("click", function () {
  console.log({ works2d });

  if (works2d.checked) {
    hideOtherGalleries("render");
    works2d.labels[0].classList.toggle("clicked");
    works2d.checked = false;
  }
  hideOtherGalleries("drawing");
  works3d.labels[0].classList.toggle("clicked");
});

works2d.addEventListener("click", function () {
  console.log({ works3d });

  if (works3d.checked) {
    hideOtherGalleries("drawing");
    works3d.labels[0].classList.toggle("clicked");
    works3d.checked = false;
  }
  hideOtherGalleries("render");
  works2d.labels[0].classList.toggle("clicked");
});
