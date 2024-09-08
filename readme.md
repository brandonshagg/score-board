
---

## HTML Review

This section defines the visual elements of the scoreboard. Here's the breakdown:

```html
<div class="scoreboard-container">
```
The main container that holds everything, including both team scores and the reset button.

```html
<div class="scores-container">
```
This container holds the score displays for both teams.

```html
<div class="column">
```
Defines a column for each team (HOME and GUEST).

```html
<h3>HOME</h3>
```
Displays the team name (HOME or GUEST).

```html
<div id="home-score" class="score">
    0
</div>
```
Displays the current score for each team. The id (home-score or guest-score) is used for updating the score with JavaScript.

```html
<div class="button-group">
    +1
    +2
    +3
</div>
```
These buttons increase the score by 1, 2, or 3 points.

```html
<div>NEW GAME</div>
```
Resets the game and sets both scores back to zero.

## CSS Review

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
@import url('https://fonts.cdnfonts.com/css/cursed-timer-ulil');
```
Imports the Poppins font and the Cursed Timer ULiL font from web sources.

```css
:root {
    --bg-color: #1B244A;
    --text-color: #EEEEEE;
    --accent-color: #F94F6D;
    --button-color: #9AABD8;
}
```
Defines the color scheme for the document using CSS variables.

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
Styles the body by removing default margins and padding, centering content, setting the background color, and applying the Poppins font.

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
Styles the main container with a semi-transparent background, blur effect, and animation.

```css
.scores-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3rem;
}
```
Styles the container for the score displays, aligning them horizontally.

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
Styles the score display for each team using the Cursed Timer ULiL font.

```css
button {
    font-family: 'Cursed Timer ULiL', monospace;
    background: var(--button-color);
    border: none;
    color: var(--bg-color);
    font-size: 1.3rem;
    padding: 0.7rem 1rem;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.1s ease;
    position: relative;
    box-shadow: 0 5px 0 #7B8AB8;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    overflow: hidden;
}
```
Styles the buttons for adding points, using the Cursed Timer ULiL font and adding a 3D effect with box-shadow.

```css
#new-game {
    font-family: 'Poppins', sans-serif;
    background: var(--accent-color);
    color: var(--text-color);
    padding: 1.2rem 2.5rem;
    font-size: 1.3rem;
    font-weight: bold;
    margin-top: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: all 0.1s ease;
    box-shadow: 0 6px 0 #C73F57;
}
```
Styles the "NEW GAME" button differently from the score buttons, using the Poppins font.

```css
@media (max-width: 768px) {
    /* Responsive styles for smaller screens */
}
```
Includes responsive design adjustments for smaller screens.

```css
@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```
Defines the fadeInUp animation used for the scoreboard container.

```css
@keyframes slideIn {
    to {
        transform: translateX(0);
    }
}
```
Defines the slideIn animation used for the underline effect on headings.

```css
@keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.08); }
    100% { transform: scale(1); }
}
```
Defines the pulse animation used for score changes.

## JavaScript Review

```javascript
let homeScore = 0;
let guestScore = 0;

const homeScoreEl = document.getElementById('home-score');
const guestScoreEl = document.getElementById('guest-score');
```
Initializes variables for storing and displaying scores.

```javascript
function updateScore(team, points) {
    if (team === 'home') {
        homeScore += points;
        homeScoreEl.textContent = homeScore;
    } else if (team === 'guest') {
        guestScore += points;
        guestScoreEl.textContent = guestScore;
    }
    highlightLeader();
}
```
Updates the score for the specified team and calls `highlightLeader()` to refresh the display colors.

### Home Functions

```javascript
function increaseHomeScoreOne() {
    updateScore('home', 1);
}

function increaseHomeScoreTwo() {
    updateScore('home', 2);
}

function increaseHomeScoreThree() {
    updateScore('home', 3);
}
```
Connects buttons to increase the home team's score by 1, 2, or 3 points.

### Guest Functions

```javascript
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
Connects buttons to increase the guest team's score by 1, 2, or 3 points.

### New Game Function

```javascript
function newGame() {
    let isWhite = false;
    let flashCount = 0;
    const maxFlashes = 10;

    clearInterval(flashInterval);

    flashInterval = setInterval(() => {
        if (flashCount >= maxFlashes) {
            clearInterval(flashInterval);
            homeScore = 0;
            guestScore = 0;
            homeScoreEl.textContent = '0';
            guestScoreEl.textContent = '0';
            highlightLeader();
        } else {
            isWhite = !isWhite;
            const color = isWhite ? '#FFFFFF' : '#F94F6D';
            homeScoreEl.style.color = color;
            guestScoreEl.style.color = color;
            flashCount++;
        }
    }, 150);
}
```
Resets the scores and creates a flashing effect, alternating between white and the original color before resetting both scores to zero.

### Event Listeners

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const newGameButton = document.getElementById('new-game');
    if (newGameButton) {
        newGameButton.addEventListener('click', newGame);
    }
});
```
Sets up an event listener to trigger the new game function when the "New Game" button is clicked.

---

