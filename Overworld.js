class Overworld {
 constructor(config) {
   this.element = config.element;
   this.canvas = this.element.querySelector(".game-canvas");
   this.ctx = this.canvas.getContext("2d");
 }

 startGameLoop() {
  const step = () => { 

    // Clear the canvas
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)


    // Draw lower layer
    this.map.drawLowerImage(this.ctx);

    // Draw all game objects
    Object.values(this.map.gameObjects).forEach(object => {
      object.update({
        arrow: this.directionInput.direction
      })
      object.sprite.draw(this.ctx);
      }
    )

    // Draw upper layer
    this.map.drawUpperImage(this.ctx);

    // Loop the animation frames
    requestAnimationFrame(() => {
      step();
    })

  }
  step();
 }

 init() {
  this.directionInput = new DirectionInput();
  this.directionInput.init(); 

  this.map = new OverworldMap(window.OverworldMaps.DemoRoom);
  this.startGameLoop();

 }


}