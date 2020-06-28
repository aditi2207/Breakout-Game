export function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let bottomOfObject = gameObject.position.y + gameObject.height;
    
    let leftsideofObject = gameObject.position.x;
    let rightsideofObject = gameObject.position.x + gameObject.width;

    if(bottomOfBall >= topOfObject && topOfBall <= bottomOfObject && ball.position.x >= leftsideofObject && ball.position.x + ball.size <= rightsideofObject){
        return true;
    }else{
        return false;
    }   
}