function draw() {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks(brickPositionDef);
	drawBall(ball1);
	//	drawBall(b2);
	drawPaddle(paddle1);
	drawPaddle(paddle2);
	moveBall(ball1);
	//	moveBall(b2);
	movePaddle();
};

function drawPaddle(paddle) {
	canvasContext.beginPath();
	canvasContext.rect(paddle.positionX, paddle.positionY, paddle.width, paddle.height);
	canvasContext.fillStyle = paddle.color;
	canvasContext.fill();
	canvasContext.closePath();
};

function drawBall(ball) {
	canvasContext.beginPath();
	canvasContext.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
	canvasContext.fillStyle = ball.color;
	canvasContext.fill();
	canvasContext.closePath();
};

function drawBricks(brickPositionDef) {
	if (!brickPositionDef.created) {
		createBricks(brickPositionDef);
	};
	for (c = 0; c < brickPositionDef.columns; c++) {
		for (r = 0; r < brickPositionDef.rows; r++) {
			canvasContext.beginPath();
			canvasContext.rect(bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
			if (bricks[c][r].lives > 0) {
				canvasContext.fillStyle = "#0095DD";
			}
			else {
				canvasContext.fillStyle = "#556270";
			}
			canvasContext.fill();
			canvasContext.closePath();
		}
	}
};