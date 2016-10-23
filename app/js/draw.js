function play() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    drawWall();
    drawBricks(brickPositionDef);
    drawBall(ball1);
    drawBall(ball2);
    drawPaddle(paddle1);
    drawPaddle(paddle2);
    moveBall(ball1);
    moveBall(ball2);
    movePaddle();
};

function drawPaddle(paddle) {
    canvasContext.beginPath();
    canvasContext.drawImage(paddle_img, paddle.positionX, paddle.positionY, paddle.width, paddle.height);
    canvasContext.closePath();
};

function drawBall(ball) {
    canvasContext.beginPath();
    let ballImg;
    if (ball.id == 'ball1') {
        ballImg = ball1_img;
    } else if (ball.id == 'ball2') {
        ballImg = ball2_img;
    }
    drawRotatedImage(ballImg, ball.x, ball.y, rotateImg_counter);
    canvasContext.closePath();
};

function drawBricks(brickPositionDef) {
    if (!brickPositionDef.created) {
        createBricks(brickPositionDef);
    };
    for (c = 0; c < brickPositionDef.columns; c++) {
        for (r = 0; r < brickPositionDef.rows; r++) {
            canvasContext.beginPath();
            if (bricks[c][r].lives > 4) {
                canvasContext.drawImage(brick3live_img, bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
            } else if (bricks[c][r].lives > 2) {
                canvasContext.drawImage(brick2live_img, bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
            } else if (bricks[c][r].lives > 0) {
                canvasContext.drawImage(brick1live_img, bricks[c][r].x, bricks[c][r].y, bricks[c][r].width, bricks[c][r].height);
            }
            canvasContext.closePath();
        }
    }
};

function drawRotatedImage(image, x, y, angle) {
    canvasContext.save();
    canvasContext.translate(x, y);
    canvasContext.rotate(angle * rotateImg_radians);
    canvasContext.drawImage(image, -(image.width / 2), -(image.height / 2), image.width, image.height);
    canvasContext.restore();
    rotateImg_counter += 5;
};

function drawWall() {
    canvasContext.beginPath();
    canvasContext.rect(0, 0, canvas.width, 5);
    if (player1.liveLosed) {
        canvasContext.fillStyle = 'red';
    } else {
        canvasContext.fillStyle = 'black';
    }
    canvasContext.fill();
    canvasContext.closePath();
    canvasContext.beginPath();
    canvasContext.rect(0, canvas.height - 5, canvas.width, 5);
    if (player2.liveLosed) {
        canvasContext.fillStyle = 'red';
    } else {
        canvasContext.fillStyle = 'black';
    }
    canvasContext.fill();
    canvasContext.closePath();
}