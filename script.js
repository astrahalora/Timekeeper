import { Timer } from './assets/js/timer.js';

// DOM elems
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// Circle perimeter ref: 2 * Math.PI * radius
const circlePerimeter = 2 * Math.PI * circle.getAttribute("r");
let duration;
circle.setAttribute("stroke-dasharray", circlePerimeter);

// Callbacks
function onStart(totalDuration) {
    duration = totalDuration;
}

function onTick(timeRemaining) {
    let currentCircleDashoffset = circlePerimeter * timeRemaining / duration - circlePerimeter;
    circle.setAttribute("stroke-dashoffset", currentCircleDashoffset);
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