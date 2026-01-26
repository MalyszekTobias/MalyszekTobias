document.addEventListener('DOMContentLoaded', () => {

  const projectCards = document.querySelectorAll('.project-card');
  if (!projectCards.length) return;

  // STRICT PC detection: mouse + hover + large viewport
  const isDesktop = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    && window.innerWidth > 1024;

  // If not desktop, do nothing — no animation at all
  if (!isDesktop) return;

  projectCards.forEach(card => {
    const angle = Math.random() * Math.PI * 2;

    const magnitudeX = (card.offsetWidth + 60) * 2;
    const magnitudeY = (card.offsetHeight + 60) * 2;

    const dx = Math.cos(angle) * magnitudeX;
    const dy = Math.sin(angle) * magnitudeY;

    card.style.setProperty('--start-x', `${dx}px`);
    card.style.setProperty('--start-y', `${dy}px`);

    card.classList.add('slide-in-any');
  });

});
