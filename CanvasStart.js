window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown",onkeydown, false);

var intPlayerX = 450;
var intPlayerY = 350;

var Game_STATE_READY = 0;
var Game_STATE_GAME = 1;
var Game_STATE_OVER = 2;

var GameState = Game_STATE_READY;

var ball = new Image();
ball.src = "image/zergling.png";

var intervalID;

var tempBall1 = {x:0, y:0, go_x:1, go_y:1};
var tempBall2 = {x:800, y:0, go_x:-1, go_y:1};
var tempBall3 = {x:800, y:600, go_x:-1, go_y:-1};
var tempBall4 = {x:0, y:600, go_x:1, go_y:-1};

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

	if(GameState == Game_STATE_READY){
		Context.font = '60px NanumGothicCoding';
		Context.fillText("Ready!", 300, 200);
	}
	else if(GameState == Game_STATE_GAME){
		Context.drawImage(ball, tempBall1.x, tempBall1.y, 100, 100);
		Context.drawImage(ball, tempBall2.x, tempBall2.y, 100, 100);
		Context.drawImage(ball, tempBall3.x, tempBall3.y, 100, 100);
		Context.drawImage(ball, tempBall4.x, tempBall4.y, 100, 100);

		Context.font = '60px NanumGothicCoding';
		Context.fillText("Go!", 300, 200);
	}
	else if(GameState == Game_STATE_OVER){
		Context.font = '60px NanumGothicCoding';
		Context.fillText("GAME OVER", 400, 300);
	}
}

function onkeydown(e) {
	if(GameState == Game_STATE_READY){
		if(e.keyCode == 13){
			GameState = Game_STATE_GAME;
			onGameStart();
		}
	}
	else if(GameState == Game_STATE_GAME){
		switch(e.keyCode){
			case 37 : if(intPlayerX>0) intPlayerX -= 20; break;
			case 39 : if(intPlayerX<824) intPlayerX += 20; break;
			case 38 : if(intPlayerY>0) intPlayerY -= 20; break;
			case 40 : if(intPlayerY<568) intPlayerY += 20; break;
		}
	}
	else if(GameState == Game_STATE_OVER){
		if(e.keyCode == 13){
			GameState = Game_STATE_READY;
		}
	}
	drawScreen();
}

function onGameStart(){
	intervalID = setInterval(MoveBall, 100);
}

function MoveBall(){
	tempBall1.x += tempBall1.go_x * 10;
	tempBall1.y += tempBall1.go_y * 10;
	tempBall2.x += tempBall2.go_x * 10;
	tempBall2.y += tempBall2.go_y * 10;
	tempBall3.x += tempBall3.go_x * 10;
	tempBall3.y += tempBall3.go_y * 10;
	tempBall4.x += tempBall4.go_x * 10;
	tempBall4.y += tempBall4.go_y * 10;
	drawScreen();
}


