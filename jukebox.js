function Jukebox() {
	this.player = document.getElementById("audioplayer"),
	this.init = function(){
		this.player.autoplay = true;
	},
	this.play = function(){
		this.player.play();
	},
	this.pause = function(){
		this.player.pause();
	},
	this.stop = function(){
		this.player.pause();
		this.player.currentTime = 0;
	},
	this.load = function(url){
		this.player.src = url;
		this.player.load();
	}
};

var jb = new Jukebox();
jb.init();

$("#l2").css({"color": "#dd3333"});

//for each of the .load() methods, pass in a string with a path to an mp3 sound file
$("#l1").on("click", function(){
	jb.load("");
	$("#list li").css({"color": "#0088ff"});
	$("#l1").css({"color": "#dd3333"});
});

$("#l2").on("click", function(){
	jb.load("");
	$("#list li").css({"color": "#0088ff"});
	$("#l2").css({"color": "#dd3333"});
});

$("#l3").on("click", function(){
	jb.load("");
	$("#list li").css({"color": "#0088ff"});
	$("#l3").css({"color": "#dd3333"});
});

$("#l4").on("click", function(){
	jb.load("");
	$("#list li").css({"color": "#0088ff"});
	$("#l4").css({"color": "#dd3333"});
});

$("#l5").on("click", function(){
	jb.load("");
	$("#list li").css({"color": "#0088ff"});
	$("#l5").css({"color": "#dd3333"});
});

$("#play").on("click", function(){
	jb.play();
});

$("#pause").on("click", function(){
	jb.pause();
});

$("#stop").on("click", function(){
	jb.stop();
});
