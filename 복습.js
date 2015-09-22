window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown", onkeydown, false);
window.addEventListener("keyup", onkeyup, false);

var strKeyEventType = "None";
var strKeyEventType = "None";

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
    Context.drawImage(imgPlayer,400,200,200,200);
    Context.fillStyle = "#fff";
    Context.font = '30px Arial';
    Context.textBaseline = "top";
    Context.fillText("입력 된 키는 : " + strKeyEventValue,5,5);
    Context.fillText("키 입력상태는 : " + strKeyEventType,5,30);
}

function onkeydown(e) {
    strKeyEventType = e.type;
    if(e.keyCode)code = e.keyCode;
    strKeyEventValue = code;
    drawScreen();
}

function onkeyup(e) {
    strKeyEventType = e.type;
    if(e.keyCode)code = e.keyCode;
    strKeyEventValue = code;
    drawScreen();
}