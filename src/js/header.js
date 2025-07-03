document.addEventListener('DOMContentLoaded', function () {
    const openBtn = document.querySelector('[data-menu-open]');
    const closeBtn = document.querySelector('[data-menu-close]');
    const mobileMenu = document.querySelector('[data-menu]');
    const menuLinks = document.querySelectorAll('.mobile-menu-link');

    openBtn.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        document.body.classList.add('no-scroll');
    });

    closeBtn.addEventListener('click', () => {
        closeMenu();
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    function closeMenu() {
        mobileMenu.classList.remove('open');
        document.body.classList.remove('no-scroll');
    }


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
