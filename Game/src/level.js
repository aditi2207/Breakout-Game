import Bricks from "./brick.js";

export function buildLevel(game, Level){
    let bricks = [];
    
    Level.forEach((row,rowIndex) => {
        row.forEach((brick, brickIndex) => {
            if(brick === 1){
                let position = {
                    x: 80 * brickIndex,
                    y: 20 + 20 * rowIndex
                }
                bricks.push(new Bricks(game, position));
            }
        });
    });

    return bricks;
}

export const Level1 = [
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
];