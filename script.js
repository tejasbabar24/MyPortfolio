document.addEventListener('DOMContentLoaded', () => {
    let menuicon = document.getElementById('menu-icon');
    let navbar = document.querySelector('.navbar');
    let navLinks = document.querySelectorAll('.navbar a');

    menuicon.onclick = () => {
        menuicon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    navLinks.forEach(link => {
        link.onclick = () => {
            menuicon.classList.remove('bx-x');
            navbar.classList.remove('active');
        };
    });

    // Initialize ScrollReveal
    const sr = ScrollReveal({
        //reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });

    // Reveal elements
    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home_img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });

    //typed js  
    const typed = new Typed('.multiplle-text',{
        strings:['Frontend Developer','Backend Developer','Java Developer'],
        typeSpeed: 100,
        backSpeed:100,
        backDelay:1000,
        loop:true
    });
   
});

window.onscroll = () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('.navbar a');

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            document.querySelector(`.navbar a[href*="${id}"]`).classList.add('active');
        }
    });

    let header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
};
