const fadeInElements = document.querySelectorAll('.js-scroll-animation');

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animation")
                entry.target.classList.remove("hidden")
            } else {
                entry.target.classList.remove('animation');
                entry.target.classList.add("hidden")
            }
        });
    }, {
        threshold: 0.1
    });

fadeInElements.forEach(element => {
    fadeObserver.observe(element);
});