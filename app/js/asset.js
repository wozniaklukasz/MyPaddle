var gameSpeed = 10;
var canvas = document.getElementById('myCanvas');
var canvasContext = canvas.getContext('2d');
var ball1 = new Ball((canvas.width - 5) / 2, 50, (Math.random() < 0.5 ? -1 : 1), (Math.random() < 0.5 ? -1 : 1), 10, 'ball1');
var ball2 = new Ball((canvas.width - 5) / 2, (canvas.height - 50), (Math.random() < 0.5 ? -1 : 1), (Math.random() < 0.5 ? -1 : 1), 10, 'ball2');
var paddle1 = new Paddle(150, 5, 0, 7, '#CBE86B');
var paddle2 = new Paddle(150, 5, (canvas.height - 5), 7, '#CB8E6B');
var player1 = new Player(3);
var player2 = new Player(3);
var bricks = [];
var bricks2 = [];
var brickPositionDef = new BrickPositionDef(2, 4, 150, 180, 100, 100, 6);
var brickPositionDef2 = new BrickPositionDef(3, 3, 200, 130, 100, 100, 1500);

function createBricks(bricks, brickPositionDef) {
    var x = brickPositionDef.x;
    for (c = 0; c < brickPositionDef.columns; c++) {
        bricks[c] = [];
        var y = brickPositionDef.y;
        for (r = 0; r < brickPositionDef.rows; r++) {
            bricks[c][r] = new Brick(x, y, 40, 40, brickPositionDef.lives);
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
};

function brickDamage(brick) {
    brick.lives--;
    if (brick.lives == 0) {}
};
/* Images */
var brick1live_img = document.getElementById('brick-1-live');
var brick2live_img = document.getElementById('brick-2-live');
var brick3live_img = document.getElementById('brick-3-live');
var brickInfinity_img = document.getElementById('brick-infinity');
var ball1_img = document.getElementById('ball-1');
var ball2_img = document.getElementById('ball-2');
var paddle_img = document.getElementById('paddle-img');

/* Rotated img */
var rotateImg_radians = Math.PI / 180;
var rotateImg_counter = 0;
