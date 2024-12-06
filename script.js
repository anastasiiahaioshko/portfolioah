document.querySelector('a[href="#cases"]').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump to the section

    // Get the target section
    const target = document.querySelector('#cases');
    const targetPosition = target.offsetTop; // Position from the top of the page
    const startPosition = window.pageYOffset; // Current scroll position
    const distance = targetPosition - startPosition; // Distance to scroll
    const duration = 2000; // Duration in milliseconds (2 seconds)
    let start = null;

    // Smooth scroll animation
    function animationScroll(timestamp) {
        if (!start) start = timestamp; // Set start time
        const timeElapsed = timestamp - start;
        const progress = Math.min(timeElapsed / duration, 1); // Progress (0 to 1)
        const ease = easeInOutCubic(progress); // Apply easing function
        window.scrollTo(0, startPosition + distance * ease); // Scroll position

        if (timeElapsed < duration) requestAnimationFrame(animationScroll); // Continue scrolling
    }

    // Easing function for smoother animation
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animationScroll);
});

