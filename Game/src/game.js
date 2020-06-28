import Paddle from "./paddle.js";
import inputHandler from "./input.js";
import Ball from "./ball.js";
import Bricks from "./brick.js";
import {buildLevel, Level1} from "./level.js";


const GAMESTATE ={
    PAUSED : 0,
    RUNNING : 1,
    GAMEOVER : 2,
    FINISHED:3      
}

export default class Game{

    constructor(gameWidth,gameHeight){
          this.gameWidth = gameWidth;
          this.gameHeight = gameHeight; 
          this.lives =3;
          this.gameObjects=[];
          this.bricks=[];
          this.score = 0;
    }


    start(){
        this.gamestate = GAMESTATE.RUNNING;

        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        this.bricks = buildLevel(this, Level1);
 
        this.gameObjects = [this.ball, this.paddle];
        new inputHandler(this, this.paddle); 
    }
    

    update(dt){
        if(this.lives == 0){
            this.gamestate = GAMESTATE.GAMEOVER;
            this.score = 50 - this.bricks.length;
        } 

        if(this.bricks.length == 0){
            this.gamestate = GAMESTATE.FINISHED;
        }

        if(this.gamestate === GAMESTATE.PAUSED || this.gamestate === GAMESTATE.GAMEOVER) return;

        [...this.gameObjects, ...this.bricks].forEach((Object) => Object.update(dt));

        this.bricks = this.bricks.filter(brick => !brick.markedForDetection);
    }

    draw(ctx){
        [...this.gameObjects, ...this.bricks].forEach((Object) => Object.draw(ctx));

        if(this.gamestate == GAMESTATE.PAUSED){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(192,192,192,0.3)";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textalign = "center";
            ctx.fillText("PAUSED", this.gameWidth/2 - 80, this.gameHeight/2 + 10);
        }

        if(this.gamestate == GAMESTATE.GAMEOVER){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "#000000";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textalign = "center";
            ctx.fillText("GAME OVER", this.gameWidth/2 - 80, this.gameHeight/2 + 10);
            ctx.fillText("SCORE : " + this.score, this.gameWidth/2 - 85, this.gameHeight/2 + 50);
        }

        if(this.gamestate == GAMESTATE.FINISHED){
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "#000000";
            ctx.fill();

            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textalign = "center";
            ctx.fillText("YOU WON!", this.gameWidth/2 - 80, this.gameHeight/2 + 10);
            ctx.fillText("SCORE : 50", this.gameWidth/2 - 85, this.gameHeight/2 + 50);
        }
    }

    togglepause(){
        if(this.gamestate == GAMESTATE.PAUSED){
            this.gamestate = GAMESTATE.RUNNING;
        }
        else{
            this.gamestate = GAMESTATE.PAUSED;
        }
    }


}