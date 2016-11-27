function movePaddle() {
    if (paddle1_rightKeyPressed) {
        movePaddleRight(paddle1)
    } else if (paddle1_leftKeyPressed) {
        movePaddleLeft(paddle1);
    }
    if (paddle2_rightKeyPressed) {
        movePaddleRight(paddle2);
    } else if (paddle2_leftKeyPressed) {
        movePaddleLeft(paddle2);
    }
};

function movePaddleRight(paddle) {
    if (paddle.positionX < canvas.width - paddle.width) {
        paddle.positionX += paddle.speed;
    }
};

function movePaddleLeft(paddle) {
    if (paddle.positionX > 0) {
        paddle.positionX -= paddle.speed;
    }
};

function moveBall(ball) {
    ball.x += ball.dx;
    ball.y += ball.dy;
    if (ball.x > canvas.width - ball.radius || ball.x < 0 + ball.radius) {
        ball.dx = -ball.dx;
    }
    if (ball.y < paddle1.height + ball.radius) {
        paddleHit(ball, paddle1, player1);
    } else if (ball.y > canvas.height - paddle1.height - ball.radius) {
        paddleHit(ball, paddle2, player2);
    }
    collisionDetection(ball);
};

function collisionDetection(ball) {
    collisionDetectionBricks(bricks, brickPositionDef, ball);
    collisionDetectionBricks(bricks2, brickPositionDef2, ball);
    // collisionDetectionBalls();
};

function collisionDetectionBalls() {
    /*TODO!*/
    let distance = Math.sqrt(Math.pow((ball2.x - ball1.x), 2) + Math.pow((ball2.y - ball1.y), 2));
    if (distance < (ball1.radius + ball2.radius)) {
        if (ball1.dx > 0 && ball1.dy > 0) {
            if (ball2.dx < 0 && ball2.dy < 0) {
                ball1.dx = -ball1.dx;
                ball1.dy = -ball1.dy;
                ball2.dx = -ball2.dx;
                ball2.dy = -ball2.dy;
            }
            if (ball2.dx < 0 && ball2.dy > 0) {
                ball1.dx = -ball1.dx;
                ball2.dx = -ball2.dx;
            }
            if (ball2.dx > 0 && ball2.dy > 0) {
                ball1.dy = -ball1.dy;
                ball2.dy = -ball2.dy;
            }
        } else if (ball1.dx < 0 && ball1.dy < 0) {
            if (ball2.dx > 0 && ball2.dy > 0) {
                ball1.dx = -ball1.dx;
                ball1.dy = -ball1.dy;
                ball2.dx = -ball2.dx;
                ball2.dy = -ball2.dy;
            }
            if (ball2.dx > 0 && ball2.dy < 0) {
                ball1.dx = -ball1.dx;
                ball2.dx = -ball2.dx;
            }
            if (ball2.dx < 0 && ball2.dy < 0) {
                ball1.dy = -ball1.dy;
                ball2.dy = -ball2.dy;
            }
        }
    }
};

function collisionDetectionBricks(bricks, brickPositionDef, ball) {
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
};

function paddleHit(ball, paddle, player) {
    if (!(ball.x >= paddle.positionX && ball.x <= (paddle.positionX + paddle.width))) {
        playerLoseLive(player);
    };
    ball.dy = -ball.dy;
};

function playerLoseLive(player) {
    player.lives--;
    player.liveLosed = true;
    setTimeout(function() {
        player.liveLosed = false;
    }, 1000);
    setPlayerLives();
}
