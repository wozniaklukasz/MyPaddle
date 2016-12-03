var gameSpeed,
    gameInterval,
    canvas,
    canvasContext,
    ball1,
    ball2,
    paddle1,
    paddle2,
    player1,
    player2,
    bricks,
    bricks2,
    brickPositionDef,
    brickPositionDef2;
    //greenEffect;

function setAssets() {
    gameSpeed = 10;
    gameInterval = null;
    canvas = document.getElementById('myCanvas');
    canvasContext = canvas.getContext('2d');
    ball1 = new Ball((canvas.width - 5) / 2, 50, (Math.random() < 0.5 ? -1 : 1), (Math.random() < 0.5 ? -1 : 1), 10, 'ball1');
    ball2 = new Ball((canvas.width - 5) / 2, (canvas.height - 50), (Math.random() < 0.5 ? -1 : 1), (Math.random() < 0.5 ? -1 : 1), 10, 'ball2');
    paddle1 = new Paddle(150, 5, 0, 7, '#CBE86B');
    paddle2 = new Paddle(150, 5, (canvas.height - 5), 7, '#CB8E6B');
    player1 = new Player(7);
    player2 = new Player(7);
    bricks = [];
    bricks2 = [];
    brickPositionDef = new BrickPositionDef(2, 4, 150, 180, 100, 100, 6);
    brickPositionDef2 = new BrickPositionDef(1, 3, 200, 230, 100, 100, 1500);
    //greenEffect = 0;
}


function createBricks(bricks, brickPositionDef) {
    var x = brickPositionDef.x;
    for (c = 0; c < brickPositionDef.columns; c++) {
        bricks[c] = [];
        var y = brickPositionDef.y;
        for (r = 0; r < brickPositionDef.rows; r++) {
            bricks[c][r] = new Brick(x, y, 40, 40, brickPositionDef.lives, (Math.floor(Math.random() * 4) + 1));
            // bricks[c][r] = new Brick(x, y, 40, 40, 1-zycie, 1-4 - efekt);
            y += brickPositionDef.marginTop;
        }
        x += brickPositionDef.marginLeft;
    }
    brickPositionDef.created = true;
};

function setText() {
    setPlayerLives();
};

function setPlayerLives() {
    document.getElementById('player1-lives').innerHTML = player1.lives;
    document.getElementById('player2-lives').innerHTML = player2.lives;
    if (player1.lives < 1) {
        gameOver(2);
    } else if (player2.lives < 1) {
        gameOver(1);
    }
};

function brickDamage(brick) {
    brick.lives--;
    if (brick.lives == 0) {
        effectTrigger(brick.effect);
    }
};

function effectTrigger(effect) {
    switch (effect) {
        case 1:
            /*blue*/
            if (paddle1.speed > 3) {
                paddle1.speed -= 3;
                paddle2.speed -= 3;
            }
            break;
        case 2:
            /*green*/
            let tmp = player1.lives;
            player1.lives = player2.lives;
            player2.lives = tmp;
            // greenEffect++;
            // switch (greenEffect) {
            //     case 1:
            //         ball1.dy *= 2;
            //         ball1.dx *= 2;
            //         break;
            //     case 2:
            //         ball2.dx *= 2;
            //         ball2.dy *= 2;
            //         break;
            // }
            break;
        case 3:
            /*red*/
            if (paddle1.width > 40) {
                paddle1.width -= 25;
                paddle2.width -= 25;
            }
            break;
        case 4:
            /*yellow - red, green or blue effect*/
            effectTrigger((Math.floor(Math.random() * 3) + 1));
            break;
        default:
            break;
    };
};
/* Images */
var brick1live_img = document.getElementById('brick-1-live');
var brick2live_img = document.getElementById('brick-2-live');
var brick3live_img = document.getElementById('brick-3-live');
var brickEffect1_img = document.getElementById('brick-effect-1');
var brickEffect2_img = document.getElementById('brick-effect-2');
var brickEffect3_img = document.getElementById('brick-effect-3');
var brickEffect4_img = document.getElementById('brick-effect-4');
var brickInfinity_img = document.getElementById('brick-infinity');
var ball1_img = document.getElementById('ball-1');
var ball2_img = document.getElementById('ball-2');
var paddle_img = document.getElementById('paddle-img');

/* Rotated img */
var rotateImg_radians = Math.PI / 180;
var rotateImg_counter = 0;
