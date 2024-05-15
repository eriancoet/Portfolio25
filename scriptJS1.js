var currentVisibleIndex = 0; // Initialize currentVisibleIndex to 0 for Groupworx

function showDiv(index) {
    // Get all showcase divs
    var showcaseDivs = document.querySelectorAll('.featured-showcase');
    
    // Hide the currently visible div with fade-out effect
    if (currentVisibleIndex !== null) {
        showcaseDivs[currentVisibleIndex].classList.remove('show');
    }
    
    // Show the clicked showcase div with fade-in effect
    showcaseDivs[index].classList.add('show');
    
    // Update the currentVisibleIndex
    currentVisibleIndex = index;
}

// slide of the portfolio-container


// Get the portfolio container element
var portfolioContainer = document.getElementById("portfolio-container");

// Function to check if any part of the element is in the viewport
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    // Adjust the threshold to consider the top or bottom edge of the SVG
    return (
        (rect.top >= 0 && rect.top <= window.innerHeight) ||
        (rect.bottom >= 0 && rect.bottom <= window.innerHeight)
    );
}



// Function to handle scroll event
function onScroll() {
    if (isInViewport(portfolioContainer)) {
        // Add a class to trigger the animation
        portfolioContainer.classList.add("show");
        // Remove the scroll event listener once the animation is triggered
        window.removeEventListener("scroll", onScroll);
    }
}

// Add scroll event listener
window.addEventListener("scroll", onScroll);

