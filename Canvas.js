﻿window.addEventListener("load", drawScreen, true);

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");
	Context.fillSytle = "#000000";
	Context.fillRect(0,0,1000,700);
}