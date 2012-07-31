// JavaScript Document

//GLOBAL VARIABLES 

//starting angle and radius (defining angle here, just cuz it doesn't really matter...)
var angleElement=0;
var radius;

var expansionOffsetX;
var expansionOffsetY;

var middleX;
var middleY;


//start things in the middle
var lock=true;


//defining color varials
var s;
var s1;
var l;
var l1;

//define opacity
var a=0.1;




//element, which defines look and feel of each enviornment
var element;

//variable used for timing
var t;

//Defining an array for background images
var backGroundImages = ["images/backgrounds/fireBg.png","images/backgrounds/waterBg.png","images/backgrounds/earthBg.png","images/backgrounds/airBg.png"];

var canvas3 = document.getElementById('canvas3');
var ctx3 = canvas3.getContext("2d");

//WHAT IS CALLED EVERY TIME THE MOUSE IS CLICKED. 
function q(event){
	
	if (hasBeenCalled==0){
		
    event = event || window.event;
	
    var canvas = document.getElementById('canvas');
    x = event.pageX - canvas.offsetLeft;
    y = event.pageY - canvas.offsetTop;
	
	radius=randHW();
	radius2=randHW();
	
	h= ((x/window.innerWidth)*40)+newHue;
	h1= ((y/window.innerWidth)*40)+newHue2;
	stopDraw();
	
	//a=(x+y)/(window.innerHeight*2);
	
	moveToCenter();
	t=setInterval(rotateDrawRec,1);
	}else{}

}


//DRAWS THE TWO RECTANGLES THEN ROTATES A WEE BIT
function rotateDrawRec(){
	width=(x-middleX)/10;
	height=(y-middleY)/10;
	drawRec(angleElement,radius,width,height);
	drawRec2(angleElement,radius2,width,height);
	angleElement+= x;
}



//GIVES US RANDOM NUMBER THAT IS USED FOR RADIUS CREATION
function randHW(){
	var widthRand = window.innerWidth;
	var randomnumber=Math.floor(Math.random()*((widthRand/2)+80));
	return randomnumber;
}




//DEFINES CENTER OF SPIN (WILL CHANGE DEPENDING ON IF THE LOCK BUTTON IS PRESSED)
function moveToCenter(){
		 if (lock==false){
			 centerX=expansionOffsetX+x;
			 centerY=expansionOffsetY+y;
		 }else{
		  centerX=expansionOffsetX+window.innerWidth/2;
		  centerY=expansionOffsetY+window.innerHeight/2;
		 }
	}





//DRAWS THE RECTANGLE (trapazoid) AS DEFINED BYT THE RECMATRIX.
//PASSES THROUGH ANGLE RADIUS WIDTH AND HEIGHT
	
function drawRec(angleElement,radius,width,height){
		var recMatrix = new Array;
		recMatrix = recMatrixCreate(angleElement,radius,width,height);

	    var canvas = document.getElementById("canvas");  
      	if (canvas.getContext) { 
        
			var ctx = canvas.getContext("2d");  
  			
			ctx.fillStyle = 'hsla('+h+','+s+'%,'+l+'%,'+a+')'; 
			
  			ctx.beginPath(); 
			ctx.moveTo(recMatrix[0][0], recMatrix[0][1]);
			var i=0;
			for (i=1;i<5;i++){
				ctx.lineTo(recMatrix[i%4][0], recMatrix[i%4][1]); 
				}
 			ctx.fill();
 			
		}
	}
	
	
	
//SAME FUNCTION AS ABOVE, with different HSL levels 
//should probably put them within the same one if I wanna be sexxxi
//but this works, which is all I care about
//and besides, does anybody actually read these?

function drawRec2(angleElement,radius,width,height){
		var recMatrix = new Array;
		recMatrix = recMatrixCreate(angleElement,radius,width,height);

	    var canvas = document.getElementById("canvas");  
      	if (canvas.getContext) { 
        
			var ctx = canvas.getContext("2d");  
  			
			ctx.fillStyle = 'hsla('+h1+','+s1+'%,'+l1+'%,'+a+')'; 
			
  			ctx.beginPath(); 
			ctx.moveTo(recMatrix[0][0], recMatrix[0][1]);
			var i=0;
			for (i=1;i<5;i++){
				ctx.lineTo(recMatrix[i%4][0], recMatrix[i%4][1]); 
				}
 			ctx.fill();
 			  
		}
	}


	
	
//Quick function to change from polar to cartesian coordinates
function radialToXY(radRadius,radAngle){
	
	//moveToCenter();
	radXYX=centerX+(radRadius*Math.cos(radAngle));
	radXYY=centerY-(radRadius*Math.sin(radAngle));
	return[radXYX,radXYY]
}




//THIS FUNCTION CREATES THE RECTANGULAR 
//(actually trapazoidal, because I'm too lazy to care) 
//MATRIX THAT IS DEPENDENT ON ROTATION, length away from centerpoint and HEIGHT AND WIDTH

function recMatrixCreate(angleRec,radiusRec,width,height){
	var point1X,point1Y,point2X,point2Y,point3X,point3Y,point4X,point4Y;
	var recAngle = angleRec;
	var recRadius = radiusRec;
	var recHeight = height;
	var squareWidth = width/2;
	var recO =  recAngle*(Math.PI/180);
	
	//Point 1
	var point1Array=radialToXY(recRadius,recO);
	point1X=point1Array[0];
	point1Y=point1Array[1];
	
	 
	//Point 2
	var dO1 = Math.tan(squareWidth/recRadius);
	var o1=(-2*dO1)+recO;
	var point2Array=radialToXY(recRadius,o1);
	point2X=point2Array[0];
	point2Y=point2Array[1];
	
	var radiusFar = recRadius+recHeight;
	
	var dO2 = Math.tan(squareWidth/recRadius);
	var o2=recO;
	var point3Array=radialToXY(radiusFar,o2);
	point3X=point3Array[0];
	point3Y=point3Array[1];
	
	
	var dO3 = Math.tan(squareWidth/recRadius);
	var o3=(-2*dO3)+recO;
	var point4Array=radialToXY(radiusFar,o3);
	point4X=point4Array[0];
	point4Y=point4Array[1];
	
	return[[point1X,point1Y],[point2X,point2Y],[point4X,point4Y],[point3X,point3Y]];
	
}





/*NOT IN USE RIGHT NOW, BUT SUPER COOL, ONLY FOR NON SPINNING ELEMENTS

//changes the locking so that we can make different circles if we want to
function changeLock(){
	var imgDestLock = document.getElementById('lockButton');
	var imgSrcLock;
	
	if (lock==true){
		
		imgSrcLock = "images/navBar/lock.png";
		imgDestLock.setAttribute("src", imgSrcLock);
		
		lock=false;
		
	}else{
		imgSrcLock = "images/navBar/unLock.png";
		imgDestLock.setAttribute("src", imgSrcLock);
		
		lock=true;
	}
}

*/



//ASSIGNS COLORS TO ENVIORNMENT
function changeColor(){
	var imgDestElement = document.getElementById('elementButton');
	var imgSrcElement;
		switch(element){
		case 0:
			stopDraw();
			
			imgSrcElement = "images/navBar/fire.png";
			imgDestElement.setAttribute("src", imgSrcElement);
			newHue=-10;
			newHue2=10;
			s=100;
			s1=100;
			l=50;
			l1=50;
			element=1;
			changeBGImage(0);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;
			
			
		case 1:
			stopDraw();
			
			imgSrcElement = "images/navBar/water.png";
			imgDestElement.setAttribute("src", imgSrcElement);
			newHue=180;
			newHue2=210;
			s=100;
			s1=100;
			l=50;
			l1=50;
			element=2;
			changeBGImage(1);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();			
			break;
		case 2:
			stopDraw();
		
			imgSrcElement = "images/navBar/earth.png";
			imgDestElement.setAttribute("src", imgSrcElement);
			newHue=70;
			newHue2=80;
			s=30;
			s1=40;
			l=18;
			l1=20;
			element=3;
			changeBGImage(2);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;
		case 3:
			stopDraw();
	
			imgSrcElement = "images/navBar/air.png";
			imgDestElement.setAttribute("src", imgSrcElement);
			newHue=270;
			newHue2=180;
			s=00;
			s1=00;
			l=80;
			l1=60;
			
			element=0;
			changeBGImage(3);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;		
		}
		
	
	
}




//Draw the background, so that when the image is downloaded, the background will be there too	
function drawBackground() {  
	var canvas2=document.getElementById('canvas2');
	if (canvas2.getContext){
    	
		var ctx2 = canvas2.getContext('2d');  
 		var myImg = new Image();
		myImg.src='images/navBar/lock.png';
		
		//if(element!=0){
		//	myImg.src = backGroundImages[element-1];
		//}else{myImg.src=backGroundImages[3];}
	
		ctx2.drawImage(myImg, 0, 0,window.innerWidth,window.innerHeight);
		alert("BAKGROUND DRAWN");
	}else{alert("WTF?!?!?");}
}






//changes background image
function changeBGImage(imageNumber){
	if (document.body){
	document.body.style.backgroundImage = "url(" + backGroundImages[imageNumber] + ")";
	}
}


//clears the canvas, for resizing and such
function clear_canvas_rectangle ()
{
	var thisCanvas = document.getElementById('canvas');
    thisCanvas.width = thisCanvas.width;
}


//stops it from drawing, so when we switch it doesn't keep drawing
function stopDraw()
{
clearTimeout(t);
}


//if you actually read this, email me at isaaclandoncohen@gmail.com 
//I'll send you a T-shirt or something... 

//this one is to make it so each time the page is refreshed gives something new, just to SPICE IT UP
function firstElement(){
	var firstElement=Math.floor(Math.random()*4);
	element=firstElement;
	
}


function save(){
	
	
	canvas3 =document.getElementById('canvas3');
	alert("vav");
	var canvas2 = document.getElementById('canvas2');
	var canvas = document.getElementById('canvas');
	//drawBackground();
	
	var ctx3 =canvas3.getContext("2d");
	
	ctx3.drawImage(canvas2, 0, 0);
	ctx3.drawImage(canvas, 0, 0);
	
	alert("vav2");
	Canvas2Image.saveAsPNG(canvas3);
	//clear_canvas_rectangle();
	alert("save");
}
	
//used to resize canvas to be the full window
function resize(){

	var canvases = document.getElementById('canvases');
	canvases.style.width=window.innerWidth+'px';
	canvases.style.height=window.innerHeight+'px';
	
	
	var canvas = document.getElementById('canvas');
	//stopDraw();
 	canvas.width=window.innerWidth*2;
	canvas.height=window.innerWidth*2;
	
	
	
	expansionOffsetX=(canvas.width-window.innerWidth)/2;
	expansionOffsetY=(canvas.height-window.innerHeight)/2;
	
	
	canvas.style.top=-expansionOffsetY+'px';
	canvas.style.left=-expansionOffsetX+'px';
	
	middleX=expansionOffsetX+(window.innerWidth/2);
	middleY=expansionOffsetY+(window.innerHeight/2);
	//alert("resize Called");
	
	var canvas2 = document.getElementById('canvas2');
	stopDraw();
 	canvas2.width=window.innerWidth;
	canvas2.height=window.innerHeight;
	
	var canvas3 = document.getElementById('canvas3');
	stopDraw();
 	canvas3.width=window.innerWidth;
	canvas3.height=window.innerHeight;
	
	

} 

//You are Loved.



//NOTES TO SELF
//drawbackground is now working, but only for the first two times it is called (in this case in save)
//after that, must click save twice,before it is called, then works for the rest of the time

//ABOVE NOTE: not just two clicks, but rather needs to load all the images. Don't know how to implement a wait til everything loads type deal, might have to ask rob


//save only works when canvas2 (the background has nothing in it.....)
//god damn im confused.


//ABOVE NOTE: tried changing cave to just canvas2, still doesn't work....



