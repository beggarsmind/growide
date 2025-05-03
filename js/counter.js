document.addEventListener('DOMContentLoaded', () => {
  const statsGrid = document.getElementById('statsGrid');
  const statsTitle = document.querySelector('.stats-title');
  const counters = document.querySelectorAll('.counter');

  const runCounter = () => {
    counters.forEach((counter) => {
      counter.innerText = '0';
      const update = () => {
        const target = +counter.getAttribute('data-target');
        const current = +counter.innerText;
        const increment = target / 60;

        if (current < target) {
          counter.innerText = `${Math.ceil(current + increment)}`;
          setTimeout(update, 20);
        } else {
          counter.innerText = target + '+';
        }
      };
      update();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        statsGrid.classList.add('visible');
        statsTitle.classList.add('visible');
        runCounter();
        observer.disconnect(); // only run once
      }
    },
    { threshold: 0.5 }
  );

  observer.observe(statsGrid);
});
