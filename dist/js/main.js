var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 3000
});

document.addEventListener('scroll', (ev) => {
    console.log(window.scrollY);

    const scrollPos = parseInt(window.scrollY);

    if (scrollPos != 0) {
        navbar.classList.toggle('navbar--scroll');
        if (!navbar.classList.contains('navbar--scroll')) {
            navbar.classList.add('navbar--scroll');
            navLinks.forEach(item => item.classList.remove('nav-item--scroll-mode'));
        }
    }
    else {
        if (navbar.classList.contains('navbar--scroll')) {
            navbar.classList.remove('navbar--scroll');
            navLinks.forEach(item => item.classList.add('nav-item--scroll-mode'));
        }
    }
})