document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Only animate project cards.
       About and Contact sections are excluded. ---------- */

  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    // Random angle (radians) for 360° direction
    const angle = Math.random() * Math.PI * 2;

    // Use card dimensions as magnitude, doubled for horizontal and vertical to ensure fully off-screen
    const magnitudeX = (card.offsetWidth + 60) * 2;
    const magnitudeY = (card.offsetHeight + 60) * 2;

    // Calculate dx/dy for the off-screen start point
    const dx = Math.cos(angle) * magnitudeX;
    const dy = Math.sin(angle) * magnitudeY;

    // Set CSS variables used by .slide-in-any
    card.style.setProperty('--start-x', `${dx}px`);
    card.style.setProperty('--start-y', `${dy}px`);

    // Add the 360° slide-in class
    card.classList.add('slide-in-any');
  });

});
