var paddle1_rightKeyPressed = false;
var paddle1_leftKeyPressed = false;
var paddle2_rightKeyPressed = false;
var paddle2_leftKeyPressed = false;
var pressedKeys = {};
onkeydown = onkeyup = function (e) {
	e = e || event; // IE fix
	pressedKeys[e.keyCode] = e.type == 'keydown';
	if (pressedKeys[39]) {
		paddle1_rightKeyPressed = true;
	}
	else paddle1_rightKeyPressed = false;
	if (pressedKeys[37]) {
		paddle1_leftKeyPressed = true;
	}
	else paddle1_leftKeyPressed = false;
	if (pressedKeys[68]) {
		paddle2_rightKeyPressed = true;
	}
	else paddle2_rightKeyPressed = false;
	if (pressedKeys[65]) {
		paddle2_leftKeyPressed = true;
	}
	else paddle2_leftKeyPressed = false;
};