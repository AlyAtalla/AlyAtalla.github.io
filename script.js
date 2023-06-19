const initApp = () => {
  const hamburger = document.querySelector('.hamburger');
  const topLinks = document.querySelector('.header-links');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    topLinks.classList.toggle('active');
  });

  const headerLinks = document.querySelectorAll('.header-link');
  headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      topLinks.classList.remove('active');
    });
  });
};

