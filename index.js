let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;
let flashInterval;

function highlightLeader() {
    if (homeScore > guestScore) {
        homeStoreEl.style.color = "#4CAF50"; // Green for leader
        guestStoreEl.style.color = "#F94F6D"; // Original color for non-leader
    } else if (guestScore > homeScore) {
        guestStoreEl.style.color = "#4CAF50"; // Green for leader
        homeStoreEl.style.color = "#F94F6D"; // Original color for non-leader
    } else {
        homeStoreEl.style.color = "#F94F6D"; // Original color if tied
        guestStoreEl.style.color = "#F94F6D"; // Original color if tied
    }
}

function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeStoreEl.textContent = homeScore;
    } else {
        guestScore += points;
        guestStoreEl.textContent = guestScore;
    }
    highlightLeader();
}

// Home Functions 
function increaseHomeScoreOne() {
    updateScore('home', 1);
}

function increaseHomeScoreTwo() {
    updateScore('home', 2);
}

function increaseHomeScoreThree() {
    updateScore('home', 3);
}

// Guest Functions
function increaseGuestScoreOne() {
    updateScore('guest', 1);
}

function increaseGuestScoreTwo() {
    updateScore('guest', 2);
}

function increaseGuestScoreThree() {
    updateScore('guest', 3);
}

// New Game Function with White Flashing
function newGame() {
    let isWhite = false;
    let flashCount = 0;
    const maxFlashes = 10; // 5 seconds at 2 flashes per second

    clearInterval(flashInterval); // Clear any existing interval

    flashInterval = setInterval(() => {
        if (flashCount >= maxFlashes) {
            clearInterval(flashInterval);
            homeScore = 0;
            guestScore = 0;
            homeStoreEl.textContent = '0';
            guestStoreEl.textContent = '0';
            highlightLeader();
        } else {
            isWhite = !isWhite;
            const color = isWhite ? '#FFFFFF' : '#F94F6D'; // White or original color
            homeStoreEl.style.color = color;
            guestStoreEl.style.color = color;
            flashCount++;
        }
    }, 150); // Flash every 500ms (twice per second)
}

// Initialize
highlightLeader();

// Add event listener to the New Game button
document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.getElementById('new-game');
    if (newGameButton) {
        newGameButton.addEventListener('click', newGame);
    }
});