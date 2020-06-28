export default class Paddle{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.width = 150;
        this.height = 20;

        this.maxspeed = 7;
        this.speed =0;
    
        this.position = {
            x: game.gameWidth/2 - this.width/2,
            y: game.gameHeight - 10 - this.height 
        }
    }

    moveLeft(){
        this.speed = -this.maxspeed;
    }

    moveRight(){
        this.speed = this.maxspeed;
    }

    stop(){
        this.speed = 0;
    }

    draw(ctx){
        ctx.fillStyle = "#0ff";
        ctx.fillRect(this.position.x,this.position.y,this.width,this.height);
    }

    update(dt){
        this.position.x += this.speed;

        if(this.position.x < 0){
            this.position.x = 0;
        }
        
        if(this.position.x + this.width > this.gameWidth){
            this.position.x = this.gameWidth - this.width;
        }
    }
}