import { Timer } from './assets/js/Timer.js';

// DOM elems
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Callbacks
function onStart() {
    console.log("Timer started");
}

function onClick() {

}

function onComplete() {

}

// Timer
const myTimer = new Timer(
    durationInput, startButton, pauseButton,
    {
        onStart,
        onClick,
        onComplete
    }
);

// myTimer.start();