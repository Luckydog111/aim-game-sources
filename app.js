const screens = document.querySelectorAll('.screen');
const startBtn = document.querySelector('#start');
const timeList = document.querySelector('#time-list');
const body = document.querySelector('body');
const btns = document.querySelectorAll('.time-btn');
const timeEl = document.querySelector('#time');
const board = document.querySelector('#board');
const colors = ['#fa3802', '#facd02', '#02fa17', '#bcfa02', '#02d9fa', '#7a02fa', '#fa02f2', '#fa026d'];

let time = 0;
let score = 0;

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
});

timeList.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
});

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove();
        createRandomCircle();
    }
});


function startGame() {
    setInterval(decreaseTime, 1000);
    createRandomCircle();
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
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`;

}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

function createRandomCircle() {
    const circle = document.createElement('div');
    const size = getRandomNumber(10, 60);
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(0, width - size);
    const y = getRandomNumber(0, height - size);
    const color = getRandomColor();


    circle.classList.add('circle');
    circle.style.backgroundColor = color;
    circle.style.boxShadow = `0 0 2px ${color}, 0 0 100px ${color}`;
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;

    board.append(circle);
    
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

// let p = 0;

// console.log(btns);

// body.style.marginTop = `0px`;

// start.addEventListener('click', (event) => {
//     event.preventDefault();
//     let timer = setInterval(() => {
//         if (body.style.marginTop === `${-700}px`) {
//             clearInterval(timer);
//         }
//         animation();
//     }, 10);
    
// });

// btns[0].addEventListener('click', (event) => {
//     event.preventDefault();
//     let timer = setInterval(() => {
//         if (body.style.marginTop === `${-1400}px`) {
//             clearInterval(timer);
//         }
//         animation();
//     }, 10);
// });


// function animation() {
//     body.style.marginTop = `${p}px`;
//     p -= 20;
// }