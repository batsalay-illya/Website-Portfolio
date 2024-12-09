const backToTopButton = document.getElementById('back-to-top');
const welcomeSection = document.getElementById('welcome-slide');

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            backToTopButton.classList.remove("hide")
            backToTopButton.classList.add("show")
        } else {
            backToTopButton.classList.remove("show")
            backToTopButton.classList.add("hide")
        }
    });
}, {
    threshold: 0.1
});

scrollObserver.observe(welcomeSection);