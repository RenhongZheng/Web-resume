
function playMusic(obj) {
	var player = document.getElementById("player");
	if(player.paused) {
		player.play();
		obj.src = 'img/music/k.png';
		$('.musicBtn').addClass('btnrotate');
	} else {
		player.pause();
		obj.src = 'img/music/j.png';
		$('.musicBtn').removeClass('btnrotate');
	}
	}
