// Smooth scroll and active link highlighting
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  const sections = document.querySelectorAll('section[id]');

  // Smooth scroll
  navLinks.forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60, // Adjust if fixed header
          behavior: 'smooth',
        });
      }

      // Optional: collapse menu on mobile
      document.getElementById('nav-list').classList.remove('active');
    });
  });

  // Active section highlighting
  window.addEventListener('scroll', () => {
    let currentSection = '';
    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 80;
      if (pageYOffset >= sectionTop) {
        currentSection = section.getAttribute('id');
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
      }
    });
  });
});
