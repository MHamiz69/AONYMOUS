// Function to show the selected page
function showPage(pageNumber) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the selected page
    const activePage = document.getElementById(`page${pageNumber}`);
    activePage.classList.add('active');
    
    // If we're showing page 1, start the balloon animation
    if (pageNumber === 1) {
        startBalloonAnimation();
    }
}

// Balloon colors array
const balloonColors = ['red', 'blue', 'orange', 'green', 'purple', 'yellow', 'pink'];

// Function to create a new balloon
function createBalloon() {
    const balloonsContainer = document.getElementById('balloonsContainer');
    
    // Create balloon element
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Add random color class
    const randomColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.classList.add(randomColor);
    
    // Set random horizontal position
    const leftPosition = Math.floor(Math.random() * 90) + 5; // 5% to 95%
    balloon.style.left = `${leftPosition}%`;
    
    // Add balloon to container
    balloonsContainer.appendChild(balloon);
    
    // Make balloon pop after 3 seconds
    setTimeout(() => {
        // Add burst animation class
        balloon.classList.add('burst');
        // Remove balloon from DOM after burst animation completes
        setTimeout(() => {
            if (balloon.parentNode) {
                balloon.parentNode.removeChild(balloon);
            }
        }, 500); // Match the burst animation duration
    }, 3000); // Pop after 3 seconds
}

// Function to start continuous balloon spawning
function startBalloonAnimation() {
    // Clear any existing balloons
    const balloonsContainer = document.getElementById('balloonsContainer');
    balloonsContainer.innerHTML = '';
    
    // Create balloons at random intervals
    function spawnBalloon() {
        createBalloon();
        // Schedule next balloon (between 500ms and 1500ms)
        const nextSpawn = Math.floor(Math.random() * 1000) + 500;
        setTimeout(spawnBalloon, nextSpawn);
    }
    
    // Start spawning balloons
    spawnBalloon();
}

// Initialize by showing the first page
document.addEventListener('DOMContentLoaded', () => {
    showPage(1);
});
