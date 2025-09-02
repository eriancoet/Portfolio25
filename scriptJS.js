document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const downArrow = document.getElementById("down-arrow");
    const portfolioContainer = document.getElementById("portfolio-container");
    const textElement = document.getElementById("typing-text");
    const text = "Hi, my name is Rian";
    let index = 0;

    // Prevent scrolling during typing effect
    document.body.style.overflow = "hidden";

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index++);
            setTimeout(typeWriter, 100);
        } else {
            // Typing finished
            navbar.classList.add("visible");

            // Restore scrolling
            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 2000);

            // Show down arrow immediately
            if (downArrow) {
                downArrow.classList.add("visible");
                console.log("✅ Added 'visible' class to #down-arrow");
            }
            if (downArrow) {
    downArrow.classList.add("visible");
}

        }
    }

    // Start typing effect with a small delay
    setTimeout(() => {
        textElement.style.opacity = "1";
        typeWriter();
    }, 500);

    // Check if portfolio container enters viewport
    function isInViewport(el) {
        const r = el.getBoundingClientRect();
        return r.top <= window.innerHeight && r.bottom >= 0;
    }

    function handleScroll() {
        if (portfolioContainer && isInViewport(portfolioContainer)) {
            portfolioContainer.classList.add("show");
            window.removeEventListener("scroll", handleScroll);
        }
        // Optional: Don't hide the arrow on mobile scroll
        // if (downArrow) downArrow.classList.remove("visible");
    }

    window.addEventListener("scroll", handleScroll);
});
