import {detectCollision} from "./collisionDetection.js";

export default class Ball{
    constructor(game){
        this.image = document.getElementById("ball-img");
        
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.size = 20;
        this.reset();
    }

    reset(){
        this.speed = { x:7, y:5};
        this.position = { x:10, y:250};
    }

    draw(ctx){
        ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
    }

    update(dt){
        
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;

        //checks if ball hits left or right wall
        if(this.position.x + this.size > this.gameWidth || this.position.x < 0){
            this.speed.x = -this.speed.x;
        }
        
        //ball hitting the bottom- game over after 3 lives
        if(this.position.y + this.size > this.gameHeight){
            this.game.lives--;
            this.reset();
        }


        //checks if ball hits top
        if(this.position.y < 0){
            this.speed.y = -this.speed.y;
        }

        //collision with paddle
        if(detectCollision(this, this.game.paddle)){
            this.speed.y = -this.speed.y;
            this.position.y = this.game.paddle.position.y - this.size;
        }
    }
}