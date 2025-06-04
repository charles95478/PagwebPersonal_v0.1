document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');

    function updateActive() {
        let current = '';
        document.querySelectorAll('main section').forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 50;
            const height = sec.offsetHeight;
            if (top >= offset && top < offset + height) {
                current = sec.getAttribute('id');
            }
        });
        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    window.addEventListener('scroll', updateActive);
    updateActive();
});
