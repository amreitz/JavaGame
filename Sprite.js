class Sprite {
    
    
    constructor (config) {
        // Loading images
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        }
        
        // Shadow
        this.useShadow = config.useShadow || false;
        if (this.useShadow) {
            this.shadow = new Image();
            this.shadow.src = "/images/characters/shadow.png";
            this.shadow.onload = () => {
                this.isShadowLoaded = true;
            }
        }


        // Configuring animation and initial state
        this.animations = config.animations || {
            idleDown: [
                [0,0]
            ]
        }
        this.currentAnimation = config.currentAnimation || "idleDown";
        this.currentAnimationFrame = 0;

        // Reference game object
        this.gameObject = config.gameObject;

    }

    // Method to draw sprite on screen
    draw (ctx) {
        const x = this.gameObject.x * 16 - 8;
        const y = this.gameObject.y * 16 - 18;

        this.useShadow && this.isShadowLoaded && ctx.drawImage(this.shadow,x,y)

        this.isLoaded && ctx.drawImage(this.image,
            0,0,
            32,32,
            x,y,
            32,32
        )
    }

}