window.onload = function() {
    //init();
};

(jQuery)('.play-btn').on('click', function() {
    $('#game-over').css('display', 'none');
    $('#intro').hide();
    $('#game').show();
    init();
});

function init() {
    setAssets();
    gameInterval = setInterval(play, gameSpeed);
    setText();
};

function gameOver(player) {
    clearInterval(gameInterval);
    $('#game-over').css('display', 'flex');
}
