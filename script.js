import { Timer } from './assets/js/timer.js';

// DOM elems
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector("circle");

// Circle perimeter ref: 2 * Math.PI * radius
const circlePerimeter = 2 * Math.PI * circle.getAttribute("r");
let duration;
let isPaused = false;
let originalInput = "";
let inputChanged = "";
circle.setAttribute("stroke-dasharray", circlePerimeter);

// Check for change
durationInput.addEventListener("input", function() {
    if(isPaused) {
        inputChanged += durationInput.value;
    }
})

// Callbacks
function onStart(totalDuration) {
    if(!isPaused) {
        duration = totalDuration; 
    }
    if(isPaused && (inputChanged !== originalInput)) {
        duration = totalDuration;
        originalInput = inputChanged;
    }
}

function onTick(timeRemaining) {
    let currentCircleDashoffset = circlePerimeter * timeRemaining / duration - circlePerimeter;
    circle.setAttribute("stroke-dashoffset", currentCircleDashoffset);
}

function onPause(bool) {
    isPaused = bool;
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
        onPause,
        onComplete
    }
);