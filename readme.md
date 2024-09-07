## HTML Review

This is where I define all the visual elements of the scoreboard. Here's how it breaks down:

```html
<div class="scoreboard-container">
```
This is the main container that holds everything, including both team scores and the reset button.

```html
<div class="scores-container">
```
This container specifically holds the score displays for both teams.

```html
<div class="column">
```
This defines a column for each team (HOME and GUEST), with one for each team.

```html
<h3>HOME</h3>
```
This header displays the team name (HOME or GUEST).

```html
<div id="home-score" class="score">
    0
</div>
```
This div shows the current score for each team. The id (home-score or guest-score) allows me to update it easily with JavaScript.

```html
<div class="button-group">
    +1
    +2
    +3
</div>
```
These are the buttons to increase the score by 1, 2, or 3 points.

```html
<div>NEW GAME</div>
```
This is the button to reset the game and set both scores back to zero.

## CSS Review

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
```
This line imports the Poppins font, which I’m using in both regular (400) and bold (700) weights.

```
This block defines the custom font 'Cursed Timer ULiL', specifying the source files in both WOFF2 and WOFF formats.

```css
:root {
    --bg-color: #1B244A;
    --text-color: #EEEEEE;
    --accent-color: #F94F6D;
    --button-color: #9AABD8;
}
```
These variables set the color scheme for the whole document.

```css
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bg-color);
    font-family: 'Poppins', sans-serif;
    color: var(--text-color);
    overflow-x: hidden;
}
```
This styles the body by removing the default margins and padding, centering everything, setting the background color, and applying the Poppins font.

```css
.scoreboard-container {
    display: flex;
    background-color: rgba(117, 117, 117, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    flex-direction: column;
    align-items: center;
    padding: 3rem;
    max-width: 700px;
    width: 100%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(50px);
    opacity: 0;
    animation: fadeInUp 0.8s ease-out forwards;
}
```
This is the main container for the scoreboard, with a flexbox layout, a translucent background, a blur effect, and an animation.

```css
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
This creates a fade-in animation that is applied to the scoreboard container.

```css
.scores-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
}
```
This container holds the team scores and spaces them out evenly.

```css
.column {
    display: flex;
    flex-direction: column;
    align-items: center;
}
```
This aligns the columns (HOME and GUEST) vertically.

```css
h3 {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;
    overflow: hidden;
}

h3::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: var(--accent-color);
    transform: translateX(-100%);
    animation: slideIn 0.8s ease-out forwards;
}
```
This styles the headers for HOME and GUEST, adding a cool underline effect that slides in.

```css
.score {
    font-family: 'Cursed Timer ULiL', monospace;
    font-size: 6.5rem;
    color: var(--accent-color);
    background: #080001;
    padding: 20px 30px;
    border-radius: 10px;
    margin-bottom: 1.5rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}
```
This styles the score display using the custom font and a large, bold layout.

```css
.button-group {
    display: flex;
    gap: 0.8rem;
}
```
This aligns the score increment buttons horizontally.

```css
button {
    /* ... button styles ... */
}

button::before {
    /* ... pseudo-element styles for buttons ... */
}

button:hover {
    /* ... hover styles for buttons ... */
}

button:active {
    /* ... active styles for buttons ... */
}
```
These blocks cover the button styles, including hover and active effects.

```css
#new-game {
    /* ... styles for the New Game button ... */
}

#new-game:hover {
    /* ... hover styles for New Game button ... */
}

#new-game:active {
    /* ... active styles for New Game button ... */
}
```
This styles the "New Game" button specifically.

```css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
}

.score-change {
    animation: pulse 0.4s ease-in-out;
}
```
This defines a pulse animation for when the score changes.

```css
@media (max-width: 768px) {
    /* Responsive styles for smaller screens */
}
```
This media query ensures the scoreboard works on smaller screens.

```css
canvas {
    pointer-events: none;
}

.scoreboard-container {
    position: relative;
    z-index: 1001;
}
```
These last styles ensure any canvas elements don’t block interactions, and the scoreboard container is layered above other elements.

## JavaScript Review

```javascript
let homeStoreEl = document.getElementById("home-score");
let guestStoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;
let flashInterval;
```
I’m declaring variables here:
- `homeStoreEl` and `guestStoreEl` are for the elements that show the scores.
- `homeScore` and `guestScore` track the actual scores.
- `flashInterval` will control the flashing effect when starting a new game.

```javascript
function highlightLeader() {
    if (homeScore > guestScore) {
        homeStoreEl.style.color = "#4CAF50";
        guestStoreEl.style.color = "#F94F6D";
    } else if (guestScore > homeScore) {
        guestStoreEl.style.color = "#4CAF50";
        homeStoreEl.style.color = "#F94F6D";
    } else {
        homeStoreEl.style.color = "#F94F6D";
        guestStoreEl.style.color = "#F94F6D";
    }
}
```
This function highlights the team with the higher score by changing the text color to green for the leader, and resetting both to the original color if tied.

```javascript
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
```
This function updates the score for either team based on the points added, and then calls `highlightLeader()` to refresh the display colors.

```javascript
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
```
These functions connect to the score buttons to increase the score for either team by 1, 2, or 3 points.

```javascript
function newGame() {
    let isWhite = false;
    let flashCount = 0;
    const maxFlashes = 10;

    clearInterval(flashInterval);

    flashInterval = setInterval(() => {
        if (flashCount >= maxFlashes

) {
            clearInterval(flashInterval);
            homeScore = 0;
            guestScore = 0;
            homeStoreEl.textContent = '0';
            guestStoreEl.textContent = '0';
            highlightLeader();
        } else {
            isWhite = !isWhite;
            const color = isWhite ? '#FFFFFF' : '#F94F6D';
            homeStoreEl.style.color = color;
            guestStoreEl.style.color = color;
            flashCount++;
        }
    }, 150);
}
```
This function resets the scores and creates a flashing effect that alternates between white and the original color before resetting both scores to zero.

```javascript
highlightLeader();
```
I call this function initially to set the correct colors when the page loads.

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.getElementById('new-game');
    if (newGameButton) {
        newGameButton.addEventListener('click', newGame);
    }
});
```
This sets up an event listener for the "New Game" button to reset the game when clicked.
