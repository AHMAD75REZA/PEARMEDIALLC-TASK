// Add your JavaScript code here
const wheel = document.querySelector('.coupon-wheel');
const spinButton = document.getElementById('spin-btn');
const resultText = document.getElementById('result-text');


const prizes = ['you own the gift card', 'Try again'];

let spinning = false;

// Event listener for spin button
spinButton.addEventListener('click', () => {
    if (!spinning) {
        startSpinning();
    }
});

// Function to start spinning the wheel
function startSpinning() {
    // Prevent multiple spins
    if (spinning) return;

    spinning = true;
    resultText.textContent = 'Spinning...';

    // Generate a random number to determine the prize
    const randomIndex = Math.floor(Math.random() * prizes.length);

    // Calculate the rotation angle based on the selected prize
    const prizeAngle = 360 / prizes.length;
    const rotation = 360 * 2 + prizeAngle * randomIndex;

    // Apply rotation to the wheel using CSS animation
    wheel.style.animation = `wheel-spin ${rotation}deg ease-in-out`;

    // Wait for the animation to finish
    setTimeout(() => {
        // Stop spinning
        spinning = false;
        wheel.style.animation = '';

        // Display the result
        const result = prizes[randomIndex];
        resultText.textContent = result;
    }, 1000); // Wait for 1 seconds before displaying the result
}
