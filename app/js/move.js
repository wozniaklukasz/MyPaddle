function movePaddle() {
	if (paddle1_rightKeyPressed) {
		movePaddleRight(paddle1)
	}
	else if (paddle1_leftKeyPressed) {
		movePaddleLeft(paddle1);
	}
	if (paddle2_rightKeyPressed) {
		movePaddleRight(paddle2);
	}
	else if (paddle2_leftKeyPressed) {
		movePaddleLeft(paddle2);
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

function moveBall(ball) {
	ball.x += ball.dx;
	ball.y += ball.dy;
	if (ball.x > canvas.width - ball.radius || ball.x < 0 + ball.radius) {
		ball.dx = -ball.dx;
	}
	if (ball.y < paddle1.height + ball.radius) {
		paddleHit(ball, paddle1, player1);
	}
	else if (ball.y > canvas.height - paddle1.height - ball.radius) {
		paddleHit(ball, paddle2, player2);
	}
	collisionDetection(ball);
}

function collisionDetection(ball) {
	for (c = 0; c < brickPositionDef.columns; c++) {
		for (r = 0; r < brickPositionDef.rows; r++) {
			let brick = bricks[c][r];
			if (brick.lives > 0) {
				if ((ball.x >= brick.x - ball.radius) && (ball.x <= brick.x + brick.width + ball.radius)) {
					if ((.5 + ball.y - ball.radius == brick.y + brick.height) || (.5 + ball.y + ball.radius == brick.y) || (ball.y - ball.radius == brick.y + brick.height) || (ball.y + ball.radius == brick.y)) {
						ball.dy = -ball.dy;
						brickDamage(bricks[c][r]);
					}
				}
				if ((ball.y >= brick.y - ball.radius) && (ball.y <= brick.y + brick.height + ball.radius)) {
					if ((.5 + ball.x + ball.radius == brick.x) || (.5 + ball.x - ball.radius == brick.x + brick.width) || (ball.x + ball.radius == brick.x) || (ball.x - ball.radius == brick.x + brick.width)) {
						ball.dx = -ball.dx;
						brickDamage(bricks[c][r]);
					}
				}
			}
		}
	}
}
/*todo: tutaj poprawa funkcji DRY!*/
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