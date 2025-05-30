document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const scrollIcon = document.getElementById("scroll-icon");
    const downArrow = document.getElementById("down-arrow");
    const portfolioContainer = document.getElementById("portfolio-container");
    const textElement = document.getElementById("typing-text");
    const text = "Hi, my name is Rian";
    let index = 0;

    document.body.style.overflow = "hidden";

    function typeWriter() {
        if (index < text.length) {
            textElement.textContent += text.charAt(index++);
            setTimeout(typeWriter, 100);
        } else {
            navbar.classList.add("visible");

            setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 2000);

            setTimeout(() => {
                if (scrollIcon) scrollIcon.classList.add("visible");
                if (downArrow) {
                    downArrow.classList.add("visible");
                    console.log("✅ Added 'visible' class to #down-arrow");
                } else {
                    console.warn("⚠️ #down-arrow not found");
                }
            }, 1000);
        }
    }

    setTimeout(() => {
        textElement.style.opacity = "1";
        typeWriter();
    }, 500);

    function isInViewport(el) {
        const r = el.getBoundingClientRect();
        return r.top <= window.innerHeight && r.bottom >= 0;
    }

    function handleScroll() {
        if (isInViewport(portfolioContainer)) {
            portfolioContainer.classList.add("show");
            window.removeEventListener("scroll", handleScroll);
        }
        if (downArrow) {
    downArrow.classList.remove("visible");
}

    }

    window.addEventListener("scroll", handleScroll);
});
