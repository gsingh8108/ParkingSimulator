//Start JS

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

g_height = 150;
g_width = 75;
g_x = 20;
g_y = 325;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";



function add() {
	
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;

}

function uploadBackground() {
	
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(greencar_imgTag, g_x, g_y, g_width, g_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	
	if(g_y >=0)
	{
		g_y = g_y - 10;
		console.log("When Up Arrow Is Pressed, x = " + g_x + " | y = " + g_y);
		uploadBackground();
		uploadgreencar();
	}

}

function down()
{
	if(g_y <= 400 ){

		g_y = g_y + 10;
		console.log("When Up Arrow Is Pressed, x = " + g_x + " | y = " + g_y);
		uploadBackground();
		uploadgreencar();

	}
}

function left()
{
	if(g_x <= 725){

		g_x = g_x - 10;
		console.log("When Up Arrow Is Pressed, x = " + g_x + " | y = " + g_y);
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	
	if(g_x <= 725){

		g_x = g_x + 10;
		console.log("When Up Arrow Is Pressed, x = " + g_x + " | y = " + g_y);
		uploadBackground();
		uploadgreencar();
	}

}
