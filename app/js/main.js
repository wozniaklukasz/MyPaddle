window.onload = function() {
    init();
};

//(jQuery)('#play-btn').on('click', function () {
//	$('#play-btn-wr').css('display', 'none');
//	init();	
//});

function init() {
    setInterval(play, gameSpeed);
    setText();
};