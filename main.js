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


$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

    //Establecer la altura del iframe de Google Translate cuando la página se carga
    var iframe = document.querySelector('iframe.goog-te-menu-frame');
    if (iframe) {
        iframe.style.height = window.innerHeight + 'px';
    }

    //Cambiar la altura del iframe de Google Translate cuando se redimensiona la ventana del navegador
    window.onresize = function () {
        var iframe = document.querySelector('iframe.goog-te-menu-frame');
        if (iframe) {
            iframe.style.height = window.innerHeight + 'px';
        }
    }
});
