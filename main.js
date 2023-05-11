AOS.init();

const navToggle = document.querySelector('.icon');
const navMenu = document.querySelector('.navbar .menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if(window.innerWidth > 768) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});


