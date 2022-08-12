import Sprite from './Sprite.js'
import { utils } from '../utilities/utils.js'

export class GameObject {

    constructor(config) {
        this.x = utils.withGrid(config.x) || 0;
        this.y = utils.withGrid(config.y) || 0;

        this.direction = config.direction || "down";

        this.sprite = new Sprite({
            gameObject: this,
            src: config.src || "/images/characters/people/hero.png",
            useShadow: config.useShadow || true
        });

    }

    update() {

    }

    mount() {
        
    }

}
