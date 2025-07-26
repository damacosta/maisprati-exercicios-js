const hamburger = document.getElementById('hamburger');

const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('ativo');
  navMenu.classList.toggle('ativo');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('ativo');
        navMenu.classList.remove('ativo');
    });
});
