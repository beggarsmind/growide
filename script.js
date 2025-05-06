const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) current = section.getAttribute('id');
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Toggle navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#nav-list li a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      document.getElementById('nav-list').classList.remove('active');
    });
  });
});
