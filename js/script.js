// Mobile Menu JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburger.addEventListener('click', function() {
        // Toggle active class for hamburger animation
        hamburger.classList.toggle('active');
        
        // Toggle mobile menu
        mobileMenu.classList.toggle('active');

         // Add/remove no-scroll class on body to prevent scrolling
         if (mobileMenu.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!hamburger.contains(event.target) && !mobileMenu.contains(event.target)) {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.getElementsByClassName('nav-link');
    Array.from(mobileLinks).forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });
});