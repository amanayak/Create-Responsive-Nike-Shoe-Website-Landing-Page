// menu toggle

const menuIcon = document.getElementById("menu-icon");
const slidingCard = document.getElementById("sliding-card");

menuIcon.addEventListener("click", () => {
  slidingCard.style.left = slidingCard.style.left === "0%" ? "-100%" : "0%";
});


//hero Section Slider 

const heroImage = document.querySelector(".hero__image img");
const images = [
  "images/img1.png",
  "images/img2.png",
  "images/img3.png",
  ];

let currentIndex = 0;

const prevIcon = document.querySelector(".prev");
const nextIcon = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

function updateActiveDot(index) {
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === index);
  });
}


prevIcon.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  heroImage.src = images[currentIndex];
  updateActiveDot(currentIndex);
});

nextIcon.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  heroImage.src = images[currentIndex];
  updateActiveDot(currentIndex);
});


updateActiveDot(currentIndex);


//scrollreveal animation 
ScrollReveal().reveal(".hero__content", {
  duration: 2000,
  delay: 200,
  easing: "ease-in-out",
  origin: "bottom",
  distance: "150px"
});


ScrollReveal().reveal(".hero__image img", {
  duration: 2000,
  delay: 200,
  easing: "ease-in-out",
  origin: "left",
  distance: "300px"
});


ScrollReveal().reveal(".social-icons", {
  duration: 2000,
  delay: 200,
  easing: "ease-in-out",
  origin: "right",
  distance: "300px"
});

