// Simple animation for the elements when the page loads
window.onload = function() {
    const bidders = document.querySelectorAll('.bidder');
    bidders.forEach((bidder, index) => {
        setTimeout(() => {
            bidder.style.opacity = 1;
            bidder.style.transform = 'translateY(0)';
        }, index * 300); // Stagger the animations
    });
};

// Set initial opacity and transform
document.querySelectorAll('.bidder').forEach(bidder => {
    bidder.style.opacity = 0;
    bidder.style.transform = 'translateY(20px)';
});
