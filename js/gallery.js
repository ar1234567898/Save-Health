const arrayOfImages = ["1", "2", "3"];

let galleryImage = 1;

document
  .getElementById("main-image")
  .setAttribute("src", `img/gallery/${galleryImage}.jpeg`);

document.getElementById("right-arrow").addEventListener("click", () => {
  galleryImage++;
  if (galleryImage > arrayOfImages.length) {
    galleryImage = 1;
  }
  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}.jpeg`);
    console.log(galleryImage);
});

document.getElementById("left-arrow").addEventListener("click", () => {
  galleryImage--;
  if (galleryImage < 1) {
    galleryImage = arrayOfImages.length;
  }
  document
    .getElementById("main-image")
    .setAttribute("src", `img/gallery/${arrayOfImages[galleryImage - 1]}.jpeg`);
    console.log(galleryImage);
    
});
