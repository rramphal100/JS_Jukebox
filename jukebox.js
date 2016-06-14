var Jukebox = function(id){
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
	this.load = function()
}

Jukebox.init();

$("#list p").on("click", function(){
	
})