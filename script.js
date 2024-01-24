import { Timer } from './assets/js/timer.js';

// DOM elems
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Callbacks
function onStart() {
    console.log("Timer started");
}

function onTick() {
    console.log("Timer just ticked down");
}

function onComplete() {
    console.log("Timer was completed");
}

// Circle perimeter ref (2 * Math.PI * radius)
const circlePerimeter = 2 * Math.PI * 160;

// Timer
const myTimer = new Timer(
    durationInput, startButton, pauseButton,
    {
        onStart,
        onTick,
        onComplete
    }
);

// myTimer.start();