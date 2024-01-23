import { Timer } from './assets/js/Timer.js';

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