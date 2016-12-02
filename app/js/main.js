window.onload = function() {
    //init();
};

(jQuery)('.play-btn').on('click', function() {
    $('#game-over').css('display', 'none');
    $('header').hide('slow');
    $('footer').hide('slow');
    $('#intro').hide('slow');
    $('#game').show('slow');
    $('#steps').show('slow');

    startGame(10, $('#step3'), false);


});

function init() {
    setAssets();
    gameInterval = setInterval(play, gameSpeed);
    setText();
};

function gameOver(player) {
    clearInterval(gameInterval);
    $('header').show('slow');
    $('footer').show('slow');
    $('#game-over').css('display', 'flex');
}

function startGame(duration, display, gameStarted) {
    setInterval(function() {
        if (duration > -1) {
            display.text(duration--);
        } else if (!gameStarted){
            gameStarted = true;
            $('#steps').hide('slow');
            init();
        };
    }, 1000);
}
