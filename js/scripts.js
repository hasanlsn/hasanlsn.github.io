/*!
* Start Bootstrap - Resume v7.0.4 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 120,
        });
    }

    // Smooth scroll for anchor links
    const scrollTriggers = document.querySelectorAll('.js-scroll-trigger');
    scrollTriggers.forEach((link) => {
        link.addEventListener('click', (event) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                event.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Bootstrap 5.3 ensures a stable light theme is active
    document.documentElement.setAttribute('data-bs-theme', 'light');

    // Scroll to and highlight a project card from the Experience timeline
    const companyProjectLinks = document.querySelectorAll(
        '.company-project-list a[href^="#project-"]'
    );
    companyProjectLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const allBtn = document.querySelector(
                '#projectFilters .filter-btn[data-filter="all"]'
            );
            if (allBtn && !allBtn.classList.contains('active')) {
                allBtn.click();
            }
            const target = document.querySelector(link.getAttribute('href'));
            if (!target) return;
            target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            target.classList.add('project-highlight');
            setTimeout(() => target.classList.remove('project-highlight'), 3000);
        });
    });

    // Filter project cards by type or status
    const filterBar = document.querySelector('#projectFilters');
    const projectTiles = Array.prototype.slice.call(
        document.querySelectorAll('.projects-grid .project-tile')
    );
    if (filterBar && projectTiles.length) {
        filterBar.addEventListener('click', (event) => {
            const button = event.target.closest('.filter-btn');
            if (!button) return;

            filterBar
                .querySelectorAll('.filter-btn')
                .forEach((btn) => btn.classList.toggle('active', btn === button));

            const filter = button.dataset.filter;
            projectTiles.forEach((tile) => {
                const visible =
                    filter === 'all' ||
                    tile.dataset.type === filter ||
                    tile.dataset.status === filter;
                tile.classList.toggle('d-none', !visible);
            });
        });
    }

});
