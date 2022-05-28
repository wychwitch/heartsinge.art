const subGalleries = document.getElementsByClassName("sub-gallery");

const imgModal = document.getElementById("image-modal");

const galleryArray = [].concat(
  [].concat(
    Array.from(subGalleries[0].childNodes).filter(
      (n) => n.nodeName !== "#text"
    ),
    Array.from(subGalleries[1].childNodes).filter(
      (n) => n.nodeName !== "#text"
    ),
    Array.from(subGalleries[2].childNodes).filter((n) => n.nodeName !== "#text")
  )
);
console.log({ subGalleries, galleryArray });

const modalImg = imgModal.firstElementChild;

const display = function (pic) {
  const imgSrc = pic.firstElementChild.src;
  console.log(imgSrc);
  modalImg.src = imgSrc;

  imgModal.classList.remove("hidden");
  imgModal.classList.add("opacity-grow");
  modalImg.classList.add("img-grow");

  imgModal.addEventListener("click", closeImage);
};

const closeImage = function (target) {
  if (target.target !== modalImg) {
    modalImg.src = "";
    imgModal.classList.add("hidden");
  }
};

console.log(galleryArray);

galleryArray.forEach((pic) => {
  console.log(pic);
  pic.addEventListener("click", function () {
    display(pic);
  });
});

//const img = pic.firstChild.src;
