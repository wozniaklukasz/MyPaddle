var canvas = document.getElementById('myCanvas');
var canvasContext = canvas.getContext('2d');
var ball1 = new Ball((canvas.width - 5) / 2, (canvas.height - 5) / 2, 2, 2, 10, '#E84A5F');
var ball2 = new Ball((canvas.width - 5) / 2, (canvas.height - 5) / 2, 3, 1, 10, '#E8A45F');
var paddle1 = new Paddle(150, 5, 0, 7, '#CBE86B');
var paddle2 = new Paddle(150, 5, (canvas.height - 5), 7, '#CB8E6B');
var player1 = new Player(3);
var player2 = new Player(3);
var bricks = [];
var brickPositionDef = new BrickPositionDef(4, 4, 150, 80, 100, 100);

function createBricks(brickPositionDef) {
	var x = brickPositionDef.x;
	for (c = 0; c < brickPositionDef.columns; c++) {
		bricks[c] = [];
		var y = brickPositionDef.y;
		for (r = 0; r < brickPositionDef.rows; r++) {
			bricks[c][r] = new Brick(x, y, 40, 40, 3);
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