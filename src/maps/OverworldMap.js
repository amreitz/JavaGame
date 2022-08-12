import { Character } from '../objects/Character.js'
import { GameObject } from '../objects/GameObject.js'
import { Item } from '../objects/Item.js';

const typeMap = {
    "Character": Character,
    "GameObject" : GameObject,
    "Item": Item,
}

export class OverworldMap {

    constructor (config) {

        this.gameObjects = {}; // Live objects are in here 
        this.configObjects = config.configObjects; // Configuration element

        this.mountObjects();

        this.lowerImage = new Image();
        this.lowerImage.src = config.lowerSrc; // tiles

        this.upperImage = new Image();
        this.upperImage.src = config.upperSrc; // things that are drawn to obscure / go over the characters.
    }

    // Mount the objects
    mountObjects() {
        Object.keys(this.configObjects).forEach(key => {
            let object = this.configObjects[key];
            object.id = key;

            let instance;

            if (object.type in typeMap) {
                instance = new typeMap[object.type](object);
            }
            
            if (instance) {
                this.gameObjects[key] = instance;
                this.gameObjects[key].id = key;
                instance.mount(this);
            }


        })
    }

    // Draw lower layer of map
    drawLowerImage(ctx) {
        ctx.drawImage(this.lowerImage,0,0)
    }

    // Draw upper layer of map (above characters)
    drawUpperImage(ctx){
        ctx.drawImage(this.upperImage,0,0)
    }

}