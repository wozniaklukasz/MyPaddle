window.onload = function() {
    //init();
};

(jQuery)('.play-btn').on('click', function() {
    $('#game-over').css('display', 'none');
    $('header').hide('slow');
    $('footer').hide('slow');
    $('#intro').hide('slow');
    $('#game').show('slow');
    $('#steps').css('display', 'flex');

    startGame(3, $('#step'), false);


});

function init() {
    setAssets();
    gameInterval = setInterval(play, gameSpeed);
    setText();
};

function gameOver(player) {
    clearInterval(gameInterval);
    $('#player-win').html(player);
    $('header').show('slow');
    $('footer').show('slow');
    $('#game-over').css('display', 'flex');
}

function startGame(duration, display, gameStarted) {
    display.text(duration);
    setInterval(function() {
        if (duration > 0) {
            display.text(duration--);
        } else if (!gameStarted){
            gameStarted = true;
            $('#steps').hide('slow');
            init();
        };
    }, 1000);
}
