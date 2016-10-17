/*
 *
 *	CLASSES
 *
 */
class Ball {
	constructor(x, y, dx, dy, radius, color) {
		this.x = x;
		this.y = y;
		this.dx = dx;
		this.dy = dy;
		this.radius = radius;
		this.color = color;
	};
};
class Paddle {
	constructor(width, height, positionX, positionY, speed, color) {
		this.width = width;
		this.height = height;
		this.positionX = positionX;
		this.positionY = positionY;
		this.speed = speed;
		this.color = color;
	};
};
class Player {
	constructor(lives) {
		this.lives = lives;
	};
};
class Brick {
	constructor(x, y, width, height, lives) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.lives = lives;
	};
};
/*
 *
 *	VARIABLES
 *
 */
var canvas = document.getElementById('myCanvas');
var canvasContext = canvas.getContext('2d');
var b1 = new Ball((canvas.width - 5) / 2, (canvas.height - 5) / 2, 2, 2, 10, '#E84A5F');
var b2 = new Ball(500, 10, 3, 1, 10, '#E8A45F');
var p1 = new Paddle(150, 10, 0, 0, 7, '#CBE86B');
var p2 = new Paddle(150, 10, 0, (canvas.height - 10), 7, '#CB8E6B');
var player1 = new Player(5);
var player2 = new Player(5);
var p1_rightKeyPressed = false;
var p1_leftKeyPressed = false;
var p2_rightKeyPressed = false;
var p2_leftKeyPressed = false;
var bricks = [];
var bricksColumns = 2;
var bricksRows = 3;
/*
 *
 *	INIT
 *
 */
window.onload = function () {
	init();
	setInterval(draw, 10);
}

function init() {
	/*todo: to mozna poprawic*/
	p1.positionX = ((canvas.width - p1.width) / 2);
	p2.positionX = ((canvas.width - p2.width) / 2);
	setText();
	createBricks();
}
/* todo na potem - losowa predkosc pilek */
//function randomInt(min, max) {
//	return Math.floor(Math.random() * (max - min + 1)) + min + Math.random();
//}
function setText() {
	setPlayerLives();
}

function setPlayerLives() {
	document.getElementById('player1-lives').innerHTML = player1.lives;
	document.getElementById('player2-lives').innerHTML = player2.lives;
}
/*
 *
 *	DRAW & MOVE
 *
 */
function draw() {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	drawBall(b1);
	//	drawBall(b2);
	drawPaddle(p1);
	drawPaddle(p2);
	moveBall(b1);
	//	moveBall(b2);
	movePaddle();
	drawBricks();
}
/* todo: sss i ddd do poprawy (rysowanie odstepow) -> zamienic na pozycje poczatkowa bricksow i ich paddingi)*/
function createBricks() {
	var ddd = 100;
	for (c = 0; c < bricksColumns; c++) {
		var sss = 90;
		bricks[c] = [];
		for (r = 0; r < bricksRows; r++) {
			bricks[c][r] = new Brick(sss, ddd, 80, 80, 3);
			sss += 210;
		}
		ddd += 200;
	}
}

function drawBricks() {
	for (c = 0; c < bricksColumns; c++) {
		for (r = 0; r < bricksRows; r++) {
			canvasContext.beginPath();
			canvasContext.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
			canvasContext.fillStyle = "#0095DD";
			canvasContext.fill();
			canvasContext.closePath();
		}
	}
}

function drawBall(ball) {
	canvasContext.beginPath();
	canvasContext.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
	canvasContext.fillStyle = ball.color;
	canvasContext.fill();
	canvasContext.closePath();
}

function moveBall(ball) {
	ball.x += ball.dx;
	ball.y += ball.dy;
	if (ball.x > canvas.width - ball.radius || ball.x < 0 + ball.radius) {
		ball.dx = -ball.dx;
	}
	if (ball.y < 0 + ball.radius) {
		paddleHit(ball, p1, player1);
	}
	else if (ball.y > canvas.height - ball.radius) {
		paddleHit(ball, p2, player2);
	}
	collisionDetection(ball);
	speedCheck(ball);
}

function speedCheck(ball) {
	if (ball.dx > 3) {
		ball.dx = 1;
	}
	if (ball.dy > 3) {
		ball.dy = 1;
	}
	if (ball.dx < -3) {
		ball.dx = -1;
	}
	if (ball.dy < -3) {
		ball.dy = -1;
	}
}

function collisionDetection(ball) {
	for (c = 0; c < bricksColumns; c++) {
		for (r = 0; r < bricksRows; r++) {
			let brick = bricks[c][r];
			if ((ball.x >= brick.x - ball.radius) && (ball.x <= brick.x + brick.width + ball.radius)) {
				if ((.5 + ball.y - ball.radius == brick.y + brick.height) || (.5 + ball.y + ball.radius == brick.y) || (ball.y - ball.radius == brick.y + brick.height) || (ball.y + ball.radius == brick.y)) {
					ball.dy = -ball.dy;
				}
			}
			if ((ball.y >= brick.y - ball.radius) && (ball.y <= brick.y + brick.height + ball.radius)) {
				if ((.5 + ball.x + ball.radius == brick.x) || (.5 + ball.x - ball.radius == brick.x + brick.width) || (ball.x + ball.radius == brick.x) || (ball.x - ball.radius == brick.x + brick.width)) {
					ball.dx = -ball.dx;
				}
			}
		}
	}
}

function paddleHit(ball, paddle, player) {
	if (ball.x >= paddle.positionX && ball.x <= (paddle.positionX + paddle.width)) {
		ball.dy = -ball.dy;
	}
	else {
		ball.dy = -ball.dy;
		player.lives--;
		setPlayerLives();
	}
}

function drawPaddle(paddle) {
	canvasContext.beginPath();
	canvasContext.rect(paddle.positionX, paddle.positionY, paddle.width, paddle.height);
	canvasContext.fillStyle = paddle.color;
	canvasContext.fill();
	canvasContext.closePath();
}

function movePaddle() {
	if (p1_rightKeyPressed) {
		movePaddleRight(p1)
	}
	else if (p1_leftKeyPressed) {
		movePaddleLeft(p1);
	}
	if (p2_rightKeyPressed) {
		movePaddleRight(p2);
	}
	else if (p2_leftKeyPressed) {
		movePaddleLeft(p2);
	}
}

function movePaddleRight(paddle) {
	if (paddle.positionX < canvas.width - paddle.width) {
		paddle.positionX += paddle.speed;
	}
}

function movePaddleLeft(paddle) {
	if (paddle.positionX > 0) {
		paddle.positionX -= paddle.speed;
	}
}
/*
 *
 *	EVENTS
 *
 */
var pressedKeys = {};
onkeydown = onkeyup = function (e) {
	e = e || event; // IE fix
	pressedKeys[e.keyCode] = e.type == 'keydown';
	if (pressedKeys[39]) {
		p1_rightKeyPressed = true;
	}
	else p1_rightKeyPressed = false;
	if (pressedKeys[37]) {
		p1_leftKeyPressed = true;
	}
	else p1_leftKeyPressed = false;
	if (pressedKeys[68]) {
		p2_rightKeyPressed = true;
	}
	else p2_rightKeyPressed = false;
	if (pressedKeys[65]) {
		p2_leftKeyPressed = true;
	}
	else p2_leftKeyPressed = false;
}