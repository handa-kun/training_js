const startBtn = document.querySelector("#start");
const screens = document.querySelectorAll('.screen');
const timeList = document.querySelector('#time-list');
let time = 0;
let score = 0;
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['firebrick', '#420606', '#c03636', '#a3990c', '#991117', '#180102'];

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove();
        createRCircle();
    }
});

function startGame() {
    setInterval(decreaseTime, 1000)
    createRCircle();
    setTime(time);
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`;
        }
        setTime(current);
    }
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1>Your score: <span class="primary">${score}</span></h1>`;
}

function createRCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const { height, width } = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getColor();

    circle.classList.add('circle');
    circle.style.backgroundColor = color;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}