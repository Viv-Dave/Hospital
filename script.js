const slider = document.querySelector(".services-slider");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".service-card");
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  currentIndex = (currentIndex + 1) % totalCards;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

prevBtn.addEventListener("click", () => {
  const cards = document.querySelectorAll(".service-card");
  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 20; // card width + margin
  currentIndex = (currentIndex - 1 + totalCards) % totalCards;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});
