const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sideBar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const container = document.querySelector('.container');

const slidesCount = mainSlide.querySelectorAll('div').length;

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

let activeSlideIndex = 0;

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        changeSlide('up')
    } else if (e.key === 'ArrowDown') {
        changeSlide('down')
    }
})

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++;
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1;
        }
    }

    const heightWindow = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * heightWindow}px)`;
    sideBar.style.transform = `translateY(${activeSlideIndex * heightWindow}px)`;
}