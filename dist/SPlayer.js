/**
   _____   _____    _                               
  / ____| |  __ \  | |                              
 | (___   | |__) | | |   __ _   _   _    ___   _ __ 
  \___ \  |  ___/  | |  / _` | | | | |  / _ \ | '__|
  ____) | | |      | | | (_| | | |_| | |  __/ | |   
 |_____/  |_|      |_|  \__,_|  \__, |  \___| |_|   
                                 __/ |              
                                |___/               
 ----------------------------------------------------
 * SPlayer's JavaScript
 * Last Update: 2020/03/31 [0.1.0]
 * Author: 小太 (https://713.moe/)
 * GitHub: https://github.com/SatoSouta/SPlayer
 * LICENSE: MIT License
 **/
var content = document.getElementById('splayer');
window.content.innerHTML = '<audio id="audio" src=""></audio>\n' +
						   '<div id="cover" style="background-image: url()">\n' +
						   '<div id="black">\n' +
						   '<p id="title">Loading...</p><span id="artist">Loading...</span>\n' +
						   '</div>\n' +
						   '</div>\n' +
						   '<div id="btn_play" style=""></div>\n' +
						   '<div id="btn_pause" style="display: none;"></div>';
var id = document.getElementById("splayer").getAttribute("netease");
var m = document.getElementById('audio');
var play = document.getElementById('btn_play');
var pause = document.getElementById('btn_pause');
var black = document.getElementById('black');
var title = document.getElementById('title');
var artist = document.getElementById('artist');
var cover = document.getElementById('cover');
var link = document.getElementById('audio');
fetch("https://api.ohmyga.cn/netease/?type=song&id="+id+"").then((res) => {
	return res.json();
}).then((i) => {
	window.title.innerHTML = i.title;
	window.artist.innerHTML = i.artist;
	window.cover.style = 'background-image: url('+i.cover+')';
	window.link.src = i.link;
});
window.m.load();
var timeout,timeout2,repeat;
function yc() {
	clearTimeout(timeout2);
	timeout = setTimeout(function(){
		black.style.opacity = '0';
		pause.style.top = '95px';
		pause.style.left = "95px";
		play.style.top = '95px';
		play.style.left = "95px";
	}, 3000);
}
function xs() {
	clearTimeout(timeout);
	timeout2 = setTimeout(function(){
		play.style.display = 'block';
		pause.style.display = 'none';
	},300);
}
play.onclick = function(){
	m.play();
	play.style.display = 'none';
	pause.style.display = 'block';
	yc();
}
pause.onclick = function(){
	m.pause();
	xs();
	pause.style.top = '53px';
	pause.style.left = "53px";
	play.style.top = '53px';
	play.style.left = "53px";
	black.style.opacity = '1';
}
audio.addEventListener('ended', function () {  
	xs();
	pause.style.top = '53px';
	pause.style.left = "53px";
	play.style.top = '53px';
	play.style.left = "53px";
	black.style.opacity = '1';
}, false);