class GuessingGame {
    constructor() {
        // this.min = 0,
        // this.max = 0
    }

    setRange(min, max) {
        this.min = min,
        this.max = max
    }

    guess() {
        this.player = Math.round((this.max + this.min) / 2)
        return this.player
    }

    lower() {
        this.max = this.player
    }

    greater() {
        this.min = this.player
    }
}

module.exports = GuessingGame;
