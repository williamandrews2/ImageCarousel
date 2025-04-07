let i = 0;
let images = [];
let time = 3000; // time in ms
let slide = document.getElementById("slide");

// image list
images[0] = "./images/darkpolygons.jpg";
images[1] = "./images/orangecat.jpg";
images[2] = "./images/blackcat.jpg";
images[3] = "./images/tuxedocat.jpg";

// change image
function changeImg() {
  slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }

  setTimeout(() => {
    changeImg();
  }, time);
}

window.onload = changeImg;
