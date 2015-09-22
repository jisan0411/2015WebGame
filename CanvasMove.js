window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown",onkeydown, false);

var intPlayerX = 450;
var intPlayerY = 350;

var imgBg = new Image();
imgBg.src = "image/background.png";

var imgPlayer = new Image();
imgPlayer.src = "image/stand.png";

imgBg.addEventListener("load", drawScreen, false);
imgPlayer.addEventListener("load", drawScreen, false);

function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    Context.drawImage(imgBg,0,0,1024,768);
    Context.drawImage(imgPlayer,intPlayerX,intPlayerY,200,200);
}

function onkeydown(e) {
	switch(e.keyCode){
		case 37 : if(intPlayerX>0) intPlayerX -= 20; break;
		case 39 : if(intPlayerX<824) intPlayerX += 20; break;
		case 38 : if(intPlayerY>0) intPlayerY -= 20; break;
		case 40 : if(intPlayerY<568) intPlayerY += 20; break;
	}
	drawScreen();
}