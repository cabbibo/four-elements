/*FOUR ELEMENTS BY CABBIBO
	

Creative Commons
Share Alike
If you make money from this, consider giving me some.
Also if you use the source, please let me know, 
Just because I'm interested in what people are making.

isaaclandoncohen@gmail.com

p.s.
I know this code is ugly, probably even atrocious
but I'm new to this game, If you have suggestions on how to clean it up
or more optimal ways to implement these things, please let me know
I am always trying to learn more.


*/


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
var backGroundImages = ["Elements/images/backgrounds/fireBg.png","Elements/images/backgrounds/waterBg.png","Elements/images/backgrounds/earthBg.png","Elements/images/backgrounds/airBg.png"];



var x=0;
var y=0;
var canvas = document.getElementById('canvas');


//WHAT IS CALLED EVERY TIME THE MOUSE IS CLICKED. 
function q(event){
		
	

	if (hasBeenCalled==0){
	
    event = event || window.event;

	
    x = event.pageX-this.offsetLeft;
    y = event.pageY-this.offsetTop;
	
	
	
 	//This is where ChangerisCalled
	//will define how the hues are cr4eated, where the radii are, how tall and wide the rectangles are
	//basically how the spinner looks.
	//There are a few different Options in changers.js
	Changer2();
	
	//stops the drawing
	stopDraw();
	
	//moves the center point of roation to the center of the page
	moveToCenter();
	
	
	//sets how fast new shapes are created
	
	t=setInterval(rotateDrawRec,1);
	}else{}
		

}



//DRAWS THE TWO RECTANGLES THEN ROTATES A WEE BIT
function rotateDrawRec(){
	
	
	drawRec(angleElement,radius1,width,height);
	drawRec2(angleElement,radius2,width,height);
	drawRec3(angleElement,radius3,width,height);
	drawRec4(angleElement,radius4,width,height);
	
	angleElement+= x;
}

//finds how far away click is from center, important for definition of spinning radius
function getRadius(){
	var distanceFromCenterX=(x-middleX);
	var distanceFromCenterY=(y-middleY);
	var distanceFromCenterTotal=Math.sqrt((distanceFromCenterX*distanceFromCenterX)+(distanceFromCenterY*distanceFromCenterY));
	return distanceFromCenterTotal;	
}
//GIVES US RANDOM NUMBER THAT IS USED FOR height and width of squares
function randHW(){
	var widthRand = window.innerWidth;
	var randomnumber=Math.floor(Math.random()*((widthRand/2)+80));
	return randomnumber;
}
//GIVES US RANDOM NUMBER THAT IS USED FOR RADIUS CREATION (only used in some Changer modes
function randomRadiusChange(){
	var randomnumber=Math.floor(Math.random()*500);
	return randomnumber	
}




//DEFINES CENTER OF SPIN, Only will be important if lock/unlock code is implemented(see commented out function changeLock below) 
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
	
	
	
//SAME FUNCTION AS ABOVE, with different HSL levels 

function drawRec2(angleElement,radius,width,height){
		var recMatrix = new Array;
		recMatrix = recMatrixCreate(angleElement,radius,width,height);

	    var canvas = document.getElementById("canvas");  
      	if (canvas.getContext) { 
        
			var ctx = canvas.getContext("2d");  
  			
			ctx.fillStyle = 'hsla('+h2+','+s2+'%,'+l2+'%,'+a+')'; 
			
  			ctx.beginPath(); 
			ctx.moveTo(recMatrix[0][0], recMatrix[0][1]);
			var i=0;
			for (i=1;i<5;i++){
				ctx.lineTo(recMatrix[i%4][0], recMatrix[i%4][1]); 
				}
 			ctx.fill();
 			  
		}
	}

function drawRec3(angleElement,radius,width,height){
		var recMatrix = new Array;
		recMatrix = recMatrixCreate(angleElement,radius,width,height);

	    var canvas = document.getElementById("canvas");  
      	if (canvas.getContext) { 
        
			var ctx = canvas.getContext("2d");  
  			
			ctx.fillStyle = 'hsla('+h3+','+s3+'%,'+l3+'%,'+a+')'; 
			
  			ctx.beginPath(); 
			ctx.moveTo(recMatrix[0][0], recMatrix[0][1]);
			var i=0;
			for (i=1;i<5;i++){
				ctx.lineTo(recMatrix[i%4][0], recMatrix[i%4][1]); 
				}
 			ctx.fill();
 			  
		}
	}

function drawRec4(angleElement,radius,width,height){
		var recMatrix = new Array;
		recMatrix = recMatrixCreate(angleElement,radius,width,height);

	    var canvas = document.getElementById("canvas");  
      	if (canvas.getContext) { 
        
			var ctx = canvas.getContext("2d");  
  			
			ctx.fillStyle = 'hsla('+h4+','+s4+'%,'+l4+'%,'+a+')'; 
			
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





/*NOT IN USE RIGHT NOW, BUT SUPER COOL,
//Unlocks the center so that you can create new circles that aren't centered around the center of the page, but rather where you click.
//Problem with this is that it makes the spinning super lopsided, so it isn't in use right now.

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
//As well as changing the background to match that enviornment. Also it clears the already drawn element

function changeColor(){
	var imgDestElement = document.getElementById('elementButton');
	var imgSrcElement;
		switch(element){
		case 0:
			stopDraw();
			
			imgSrcElement = "Elements/images/navBar/icons/fire.png";
			imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
			
			//imgDestElement.setAttribute("src", imgSrcElement);
			newHue=0;
			newHue2=0;
			newHue3=0;
			newHue4=0;
			
			s1=100;
			s2=100;
			s3=100;
			s4=100;
			
			l1=50;
			l2=50;
			l3=50;
			l4=50;
			element=1;
			changeBGImage(0);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;
			
			
		case 1:
			stopDraw();
			
			imgSrcElement = "Elements/images/navBar/icons/water.png";
			imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
			//imgDestElement.setAttribute("src", imgSrcElement);
			newHue=180;
			newHue2=210;
			newHue3=220;
			newHue4=160;
			s1=100;
			s2=100;
			s3=100;
			s4=100;
			l1=50;
			l2=50;
			l3=50;
			l4=50
			element=2;
			changeBGImage(1);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();			
			break;
		case 2:
			stopDraw();
		
			imgSrcElement = "Elements/images/navBar/icons/earth.png";
			imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
			//imgDestElement.setAttribute("src", imgSrcElement);
			newHue=70;
			newHue2=80;
			newHue3=100;
			newHue4=60;
			
			s1=30;
			s2=40;
			s3=80;
			s4=100;
			
			l1=18;
			l2=20;
			l3=40;
			l4=40;
			element=3;
			changeBGImage(2);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;
		case 3:
			stopDraw();
	
			imgSrcElement = "Elements/images/navBar/icons/air.png";
			imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
			//imgDestElement.setAttribute("src", imgSrcElement);
			newHue=270;
			newHue2=180;
			newHue3=270;
			newHue4=180;
			s1=00;
			s2=00;
			s3=00;
			s4=00;
			
			l1=80;
			l2=60;
			l3=90;
			l4=70;
			
			element=0;
			changeBGImage(3);
			
			clear_canvas_rectangle(canvas);
			//drawBackground();
			break;		
		}
		
	
	
}






//changes background image
function changeBGImage(imageNumber){
	if (document.body){
	document.body.style.backgroundImage = "url(" + backGroundImages[imageNumber] + ")";
	}else{alert("else called")};
	
	
	//This part of change background image is for when the image is saved, so it has a background
	document.getElementById('canvas2').style.backgroundImage  = "url(" + backGroundImages[imageNumber] + ")";
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


//if you  are actually still reading these, email me at isaaclandoncohen@gmail.com 
//I'll send you a T-shirt or something... 

//this one is to make it so each time the page is refreshed gives something new, just to SPICE IT UP
function firstElement(){
	var firstElement=Math.floor(Math.random()*4);
	element=firstElement;
	
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
	
	
	
	
	

} 

//You are Loved.


