AOS.init();

const navbar = document.querySelector('.navbar');

window.onscroll = () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

function myFunction() {
    var x = document.querySelector('.navbar');
    if (x.className === 'navbar') {
        x.className += ' responsive';
    } else {
        x.className = 'navbar';
    }
}

