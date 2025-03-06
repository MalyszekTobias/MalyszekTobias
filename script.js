let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const carouselItems = document.querySelector('.carousel-items');
let touchStartX = 0;
let touchEndX = 0;

// Slide the carousel to show the current item
function showItem(index) {
  const offset = -index * 100; // Each item occupies 100% width
  carouselItems.style.transform = `translateX(${offset}%)`;
}

// Advance to the next item
function nextItem() {
  currentIndex = (currentIndex + 1) % totalItems;
  showItem(currentIndex);
}

// Go to the previous item
function prevItem() {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  showItem(currentIndex);
}

// Touch support for mobile devices
carouselItems.addEventListener('touchstart', (e) => {
  touchStartX = e.touches[0].clientX;
});

carouselItems.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    nextItem(); // Swipe left
  } else if (touchEndX > touchStartX) {
    prevItem(); // Swipe right
  }
}

// Event listeners for navigation arrows
document.querySelector('.next').addEventListener('click', nextItem);
document.querySelector('.prev').addEventListener('click', prevItem);

// Show loading progress
NProgress.start();

window.addEventListener('load', () => {
  NProgress.done();
});