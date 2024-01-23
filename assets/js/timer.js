export class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        this.durationInput.addEventListener("input", this.limit);
    }

    limit = () => {
        const maxChars = 5;
        if(this.durationInput.value.length > maxChars) {
            this.durationInput.value = this.durationInput.value.slice(0, maxChars);
        }
    }

    start = () => {
        this.tick();
        this.ticker = setInterval(this.tick, 1000);
    }

    pause = () => {
        clearInterval(this.ticker);
    }

    tick = () => {
        return this.timeRemaining <= 0 ?
            this.pause() : this.timeRemaining = this.timeRemaining - 1;
    }

    get timeRemaining() {
        const time = parseFloat(this.durationInput.value);
        return isNaN(time) ? 61 : time;
    }

    set timeRemaining(time) {
        this.durationInput.value = time;
    }

}