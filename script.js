import { Timer } from './assets/js/timer.js';

// DOM elems
const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

// Timer
const myTimer = new Timer(durationInput, startButton, pauseButton);
// myTimer.start();