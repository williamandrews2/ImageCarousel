let index = 0;
let images = [];
let time = 3000; // time in ms
let slideInterval;

const slide = document.getElementById("slide");
const navDots = document.getElementById("nav-dots");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");

// image list
images[0] = "./images/darkpolygons.jpg";
images[1] = "./images/orangecat.jpg";
images[2] = "./images/blackcat.jpg";
images[3] = "./images/tuxedocat.jpg";

// event listeners for manual navigation
previousButton.addEventListener("click", () => {
  changeIndex(-1);
  changeImg();
  resetInterval();
});

nextButton.addEventListener("click", () => {
  changeIndex(1);
  changeImg();
  resetInterval();
});

// change image
function changeImg() {
  slide.src = images[index];
  highlightDot(index);
}

// change index: -1 for previous and 1 for next
function changeIndex(direction) {
  index = (index + direction + images.length) % images.length;
}

function resetInterval() {
  clearInterval(slideInterval);
  startSlideshow();
}

function startSlideshow() {
  slideInterval = setInterval(() => {
    changeImg();
    changeIndex(1);
  }, time);
}

function renderDots() {
  for (let i = 0; i < images.length; i++) {
    const dot = document.createElement("button");
    dot.className = "carousel-dot";
    dot.innerText = "⚪";
    dot.setAttribute("data-index", i);
    dot.addEventListener("click", () => {
      index = i;
      changeImg();
      resetInterval();
    });
    navDots.appendChild(dot);
  }
}

function highlightDot(index) {
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === index);
  });
}

window.onload = () => {
  changeImg();
  renderDots();
  startSlideshow();
};
