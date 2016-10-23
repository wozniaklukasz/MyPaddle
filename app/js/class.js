class Ball {
    constructor(x, y, dx, dy, radius, id) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.id = id;
    };
};
class Paddle {
    constructor(width, height, positionY, speed, color) {
        this.width = width;
        this.height = height;
        this.positionX = ((canvas.width - width) / 2);
        this.positionY = positionY;
        this.speed = speed;
        this.color = color;
    };
};
class Player {
    constructor(lives) {
        this.lives = lives;
        this.liveLosed = false;
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
class BrickPositionDef {
    constructor(rows, columns, x, y, marginTop, marginLeft) {
        this.rows = rows;
        this.columns = columns;
        this.x = x;
        this.y = y;
        this.marginTop = marginTop;
        this.marginLeft = marginLeft;
        this.created = false;
    }
};