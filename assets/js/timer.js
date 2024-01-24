export class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener("click", this.start);
        this.pauseButton.addEventListener("click", this.pause);
        this.durationInput.addEventListener("input", this.limitInputLength);
    }

    limitInputLength = () => {
        const maxChars = 5;
        return this.durationInput.value.length > maxChars ?
            this.durationInput.value = this.durationInput.value.slice(0, maxChars) : null;
    }

    start = () => {
        if(this.onStart) this.onStart(this.timeRemaining);
        this.tick();
        this.ticker = setInterval(this.tick, 50);
    }

    pause = () => {
        clearInterval(this.ticker);
    }

    tick = () => {
            if(this.timeRemaining <= 0) {
                this.pause();
                if(this.onComplete) this.onComplete();
            } else {
                this.timeRemaining = this.timeRemaining - .05;
                if(this.onTick) this.onTick(this.timeRemaining);
            }
    }

    get timeRemaining() {
        const time = parseFloat(this.durationInput.value);
        return isNaN(time) ? 61 : time;
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}