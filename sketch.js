var ball;
var database,position;
var target;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var ball_loc = database.ref('ball/position');
    ball_loc.on("value",readPosition,showError)
    
    target = new Target(randomNumber(10,500),randomNumber(10,500));
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    target.display();
    drawSprites();
}
/*
function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
*/
function writePosition(x,y){
    database.ref('ball/position').set({
        'x': position.x + x,
        'y': position.y + y,
    })
}
function readPosition(data){
    position = data.val();
    ball.sprite.x = position.x;
    ball.sprite.y = position.y;
}
function showError(){
    console.log("ERROR");
}
