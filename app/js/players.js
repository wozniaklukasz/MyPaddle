class Player {
	constructor(lives) {
		this.lives = lives;
	};
};
var playerClass = {
	setPlayerLives: function setPlayerLives() {
		document.getElementById('player1-lives').innerHTML = player1.lives;
		document.getElementById('player2-lives').innerHTML = player2.lives;
	}
	, player1: new Player(3)
	, player2: new Player(3)
}
