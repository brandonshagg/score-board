
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
```
Imports the Poppins font, used in both regular (400) and bold (700) weights.

```css
:root {
    --bg-color: #1B244A;
    --text-color: #EEEEEE;
    --accent-color: #F94F6D;
    --button-color: #9AABD8;
}
```
Defines the color scheme for the document.

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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: var(--accent-color);
    width: 90%;
    max-width: 400px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    padding: 20px;
}
```
Styles the main container, ensuring it's centered and responsive.

```css
.scores-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}
```
Styles the container for the score displays, aligning them horizontally.

```css
.column {
    text-align: center;
    flex: 1;
}
```
Ensures both columns (HOME and GUEST) are evenly spaced and centered.

```css
.score {
    font-size: 72px;
    font-weight: bold;
    background-color: var(--button-color);
    padding: 20px;
    border-radius: 10px;
    width: 100px;
    text-align: center;
}
```
Styles the score display for each team.

```css
.button-group {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}
```
Arranges the buttons for scoring changes.

```css
button {
    font-size: 24px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    background-color: var(--button-color);
    color: var(--text-color);
    border-radius: 5px;
    cursor: pointer;
}
```
Styles the buttons for adding points, giving them a bold look and easy interaction.

```css
button:hover {
    background-color: var(--accent-color);
}
```
Adds a hover effect to the buttons.

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
```
Imports the Poppins font, used in both regular (400) and bold (700) weights.

```css
:root {
    --bg-color: #1B244A;
    --text-color: #EEEEEE;
    --accent-color: #F94F6D;
    --button-color: #9AABD8;
}
```
Defines the color scheme for the document.

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
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background: var(--accent-color);
    width: 90%;
    max-width: 400px;
    height: 600px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    padding: 20px;
}
```
Styles the main container, ensuring it's centered and responsive.

```css
.scores-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
}
```
Styles the container for the score displays, aligning them horizontally.

```css
.column {
    text-align: center;
    flex: 1;
}
```
Ensures both columns (HOME and GUEST) are evenly spaced and centered.

```css
.score {
    font-size: 72px;
    font-weight: bold;
    background-color: var(--button-color);
    padding: 20px;
    border-radius: 10px;
    width: 100px;
    text-align: center;
}
```
Styles the score display for each team.

```css
.button-group {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}
```
Arranges the buttons for scoring changes.

```css
button {
    font-size: 24px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    background-color: var(--button-color);
    color: var(--text-color);
    border-radius: 5px;
    cursor: pointer;
}
```
Styles the buttons for adding points, giving them a bold look and easy interaction.

```css
button:hover {
    background-color: var(--accent-color);
}
```
Adds a hover effect to the buttons.

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

