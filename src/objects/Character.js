import {GameObject} from './GameObject.js'

export class Character extends GameObject {
    constructor(config) {
        super(config);

        this.movingProgressRemaining = 0;
        this.isPlayerControlled = config.isPlayerControlled || false;

        this.directionUpdate = {
            "down": ["y",1],
            "up": ["y",-1],
            "left": ["x",-1],
            "right": ["x",1]
        }

    }

    updatePosition() {
        if (this.movingProgressRemaining > 0) {
            const [property, change] = this.directionUpdate[this.direction];
            this[property] += change
            this.movingProgressRemaining -= 1
        }
    }

    update(state) {
        this.updatePosition();

        if (this.movingProgressRemaining === 0 && state.arrow && this.isPlayerControlled) {
            this.direction = state.arrow;
            this.movingProgressRemaining = 16;
        }
    }
}
