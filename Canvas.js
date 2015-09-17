window.addEventListener("load", drawScreen, true);

function drawScreen(){
	var theCanvas = document.getElementById("GameCanvas");
	var Context = theCanvas.getContext("2d");

	Context.fillStyle = "#505000";
	Context.fillRect(0,0,1000,700);

	//달

	Context.beginPath();
	Context.arc(800,130,150,1*Math.PI,3*Math.PI,false);
	Context.fillStyle="#ff0";
	Context.fill();

	// 1인

	Context.beginPath();
	Context.arc(400,400,50,1*Math.PI,3*Math.PI,false);
	Context.fillStyle="#ff0";
	Context.fill();

	Context.beginPath();
	Context.moveTo(400,450);
	Context.lineTo(400,550);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(300,480);
	Context.lineTo(500,480);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(400,550);
	Context.lineTo(300,650);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(400,550);
	Context.lineTo(500,650);
	Context.strokeStyle = "#fff";
	Context.stroke();

	// 2인

	Context.beginPath();
	Context.arc(150,400,50,1*Math.PI,3*Math.PI,false);
	Context.fillStyle="#ff0";
	Context.fill();

	Context.beginPath();
	Context.moveTo(150,450);
	Context.lineTo(150,550);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(50,480);
	Context.lineTo(250,480);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(150,550);
	Context.lineTo(50,650);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(150,550);
	Context.lineTo(250,650);
	Context.strokeStyle = "#fff";
	Context.stroke();

	//
	
	Context.beginPath();
	Context.moveTo(150,100);
	Context.lineTo(100,150);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(150,100);
	Context.lineTo(200,150);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(280,100);
	Context.lineTo(230,150);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.moveTo(280,100);
	Context.lineTo(330,150);
	Context.strokeStyle = "#fff";
	Context.stroke();

	Context.beginPath();
	Context.arc(210,220,60,1*Math.PI,2*Math.PI,true);
	Context.fillStyle="#ff0";
	Context.fill();
}



