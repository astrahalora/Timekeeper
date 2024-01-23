export class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
    }

    start = () => {
        this.tick();
        this.ticker = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.ticker);
    }

    tick = () => {
        console.log("tick");
    }
}