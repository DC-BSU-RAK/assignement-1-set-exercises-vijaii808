// Get DOM elements from the HTML page
const rgbValueDisplay = document.getElementById('rgb-value');
const colorOptionsContainer = document.getElementById('color-options');
const messageDisplay = document.getElementById('message');
const playAgainBtn = document.getElementById('play-again');
const scoreDisplay = document.getElementById('score');
const livesDisplay = document.getElementById('lives');

// Game state variables
let correctColor = '';  // The correct color to be guessed
let score = 0;          // Player's score
let lives = 3;          // Remaining lives

// Function to generate a random RGB color string
function generateRandomColor() {
  const r = Math.floor(Math.random() * 256); // Random red value (0-255)
  const g = Math.floor(Math.random() * 256); // Random green value (0-255)
  const b = Math.floor(Math.random() * 256); // Random blue value (0-255)
  return `rgb(${r}, ${g}, ${b})`; // Return string in RGB format
}

// Function to start or reset a new game round
function newRound() {
  // Clear previous options and messages
  colorOptionsContainer.innerHTML = '';
  messageDisplay.textContent = '';
  playAgainBtn.classList.add('hidden');

  // Generate the correct RGB value and display it
  correctColor = generateRandomColor();
  rgbValueDisplay.textContent = correctColor;

  // Randomly select one of the buttons to have the correct color
  const correctIndex = Math.floor(Math.random() * 3);

  // Generate 3 color buttons (one correct, two random)
  for (let i = 0; i < 3; i++) {
    const color = i === correctIndex ? correctColor : generateRandomColor();
    const btn = document.createElement('button');
    btn.classList.add('color-btn');          // Add CSS class
    btn.style.backgroundColor = color;       // Set button background to color

    // Add click event to handle guessing
    btn.addEventListener('click', () => handleGuess(color === correctColor));
    colorOptionsContainer.appendChild(btn);  // Add button to the container
  }
}

// Function to handle a user's guess
function handleGuess(isCorrect) {
  if (isCorrect) {
    score++;  // Increase score if correct
    messageDisplay.textContent = '✅ Correct!';
  } else {
    lives--;  // Decrease life if incorrect
    messageDisplay.textContent = '❌ Wrong!';
  }

  updateScoreboard(); // Update lives and score on screen

  // Check for game over
  if (lives === 0) {
    messageDisplay.textContent = `Game Over! Final Score: ${score}`;
    playAgainBtn.classList.remove('hidden'); // Show play again button
    colorOptionsContainer.innerHTML = '';    // Clear options
  } else {
    setTimeout(newRound, 1000); // Start new round after 1 second
  }
}

// Function to update score and lives display
function updateScoreboard() {
  scoreDisplay.textContent = score;
  livesDisplay.textContent = lives;
}

// Restart game when Play Again button is clicked
playAgainBtn.addEventListener('click', () => {
  score = 0;
  lives = 3;
  updateScoreboard();
  newRound();
});

// Start the first round when the page loads
newRound();
