import {detectCollision} from "./collisionDetection.js";

export default class Bricks{
    constructor(game, position){
        this.image = document.getElementById("brick-img");

        this.game = game;

        this.position = position;
        this.width = 78;
        this.height= 20;

        this.markedForDetection = false;
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }

    update(dt){
        if(detectCollision(this.game.ball, this)){
            this.game.ball.speed.y = -this.game.ball.speed.y;
            this.markedForDetection = true;
        }    
    }

}