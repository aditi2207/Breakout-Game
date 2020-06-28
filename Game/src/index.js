import Game from "./game.js";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CompleteWidth = 800;
const CompleteHeight = 600;

let lastTime = 0;

let game = new Game(CompleteWidth,CompleteHeight);
game.start();

function gameLoop(timestamp){
    let dt = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0,0,800,600);
    game.update(dt);
    game.draw(ctx);
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

