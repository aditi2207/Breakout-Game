
export default class inputHandler{
    constructor(game, paddle){
        document.addEventListener("keydown",(event)=>{

            switch(event.keyCode){
                case 37:        //left arrow
                    paddle.moveLeft();
                    break;
                case 39:        //right arrow
                    paddle.moveRight();
                    break;
                case 32:        //spacebar
                    game.togglepause();
                    break;
            }
        });

        document.addEventListener("keyup",(event)=>{

            switch(event.keyCode){
                case 37: //leftkey is not pressed
                    if(paddle.speed < 0)
                        paddle.stop();
                    break;
                case 39:    //rightkey is not pressed
                if(paddle.speed > 0)
                    paddle.stop();
                break;
            }
        });
    }
}