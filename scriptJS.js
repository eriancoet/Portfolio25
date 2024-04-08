document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById('navbar');
    const scrollIcon = document.getElementById('scroll-icon');
    const portfolioContainer = document.getElementById('portfolio-container');
    const textElement = document.getElementById('typing-text');
    const text = "Hi, my name is Rian";
    let index = 0;
    let typingAnimationFinished = false;

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100); // Adjust typing speed (in milliseconds)
        } else {
            // Fade in the navbar
            navbar.classList.add('visible');
            // Enable scrolling after 2 seconds
            setTimeout(() => {
                document.body.style.overflow = 'auto';
            }, 2000);
            typingAnimationFinished = true;
            // Show the scroll icon after 4 seconds
            setTimeout(() => {
                scrollIcon.classList.add('visible');
            }, 4000);
        }
    }

    function showPortfolio() {
        const rect = portfolioContainer.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            portfolioContainer.classList.add('visible');
            // Remove the scroll event listener once the portfolio is visible
            window.removeEventListener('scroll', showPortfolio);
        }
    }

    setTimeout(() => {
        textElement.style.opacity = '1';
        typeWriter();
    }, 500); // Adjust delay before animation starts (in milliseconds)

    window.addEventListener('scroll', function () {
        if (!typingAnimationFinished) {
            // Disable scrolling
            document.body.style.overflow = 'hidden';
        }
    });

    window.addEventListener('scroll', showPortfolio);
});

