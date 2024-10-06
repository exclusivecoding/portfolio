// Sticky Header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPos = window.scrollY;

    if (scrollPos > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});