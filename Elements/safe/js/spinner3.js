
//THINGS YOU ARE LEARNING:
// MORE SPECIFIC VARIABLES


//Most of the commented out alerts are for testing
//should be uncommmented when there is a problem with the code 
//To be able to tell where the bug is appening




//Variable that IS the object that is created when draw() method is called. 
var _savedInstanceImgSpin;


//The Expansion of the canvas Img, created so that no blank spots show up when it is spun, the image created is much bigger the actual screen 
var expansionOffsetYImgSpin;
var	expansionOffsetXImgSpin;

//variable for the timeout of the img spin
var tImgSpin;

//var counter=1;

//Height and width of object drawn in  draw(); Defines the center of Rotations
var heightImgSpin=0;
var widthImgSpin=0;

//ANGLE of DRAWING
var angleImgSpin = 0;

//Used in the centering of the Rectangle
//the angle that is the center of the square to a corner (defined by vars height and width)
var angleWithinImgSpin=0;
	
//the above two angles combined. This is important otherwise the image would be measured from the top part of the square, not the center)
var angleTotalImgSpin= 0;

//Hypotenus of the square
var hypImgSpin=0;

//where the angle starts from (THIS IS WHERE WE SHOULD ALTER TO CHANGE THE POINT OF intrest for the compass to ZONE in on when down is pressed)
var angleStartImgSpin=0;

var offxImgSpin=0;
var offyImgSpin=0;




//the changes in mouse position from one call to another
//used to tell how much to turn the image when the mouse is moved
var dXImgSpin;
var dYImgSpin;

//The "Memory of the dX and dYImgSpin
//Used when the wheel is released to tell how much should keep on getting added
var dX1ImgSpin;
var dY1ImgSpin;
var dX2ImgSpin;
var dY2ImgSpin;

//this is the angle we are going to have for adding momentum
var dAngleImgSpin=0;
var angleMomentumImgSpin=0;

//These are to help determine how fast the img should spin when released
var dAngle1ImgSpin;
var dAngle2ImgSpin;
var dAngle3ImgSpin;



//these variables are where the center will be for the rotated object, not actually the center of the page
var centeredXImgSpin=0;
var centeredYImgSpin=0;

//THESE are the center of the page;
var centerXImgSpin;
var centerYImgSpin;


//Guess what this is for.
var mouseDown=0;


//Checker to see if Img is spinning or Not Spinning
var imgIsSpinning=0;




//This is the function that is called when the mouse is pressed down			
function down(){
	
	mouseDown=1;
	
	getNewAngle();
	
	//Creates a new angleMomentum so that it slows down faster when the mouse is down
	//attempt to add "friction" to the mouse
	angleMomentumImgSpin=.005;
	
}
	

//Function that is called when the mouse is released
function up(){

		mouseDown=0;
		
		
		//This mini function is created so that when the mouse is release the Img gets some momentum to keep is spinning
		//To Do: make it so there is a max (if statement, if its greater set its max)
		
	
		//There are 3 of these now, originially created to make is so it was  a bit less "jumpy", 
		//AKA so you had to actually spin it rather then accidently let go. Can't figure out how to implement it properly though
		dAngle1ImgSpin=Math.atan(dYImgSpin/dXImgSpin);
		dAngle2ImgSpin=Math.atan(dY1ImgSpin/dX1ImgSpin);
		dAngle3ImgSpin=Math.atan(dY2ImgSpin/dX2ImgSpin);
		
		//gives us the amount that the Img will turn every call
		dAngleImgSpin=(dAngle1ImgSpin-dAngle3ImgSpin)*.5;
		
		//Friction of unhampered spinner, Right now spins extremely freely.
		angleMomentumImgSpin=.0005;
	
		
	
		
}


//Function that is  called when the mouse is moved
function move(){
		
       
	   //if the mouse is down, makes the image spin with it
	   //else, it does nothing. Letting it spin on its own unless the mouse is pressed
	   if (mouseDown == 1){
	
		 getNewAngle();
		 
	   }else{
		   
	   }
			
}

  
  
  
//This is the main function, tells the image how much to spin everytime it is called
function getNewAngle(){
		
		
		//gives us previous previous dX/dY for use in momentum when the mouse is released.  
		//may want to add another one just so there is less likely for a tiny movement to cause a huge momentum. 
		//could also make dx add to dy
		dX2ImgSpin=dX1ImgSpin;
		dY2ImgSpin=dY1ImgSpin;
		dX1ImgSpin=dXImgSpin;
		dY1ImgSpin=dYImgSpin;
		
		//dX=centerX-window.event.clientX;
		//dY=centerY-window.event.clientY;
	
		//the difference between the center of the image, and the X & Y of the mouse
		dXImgSpin=(centerXImgSpin-expansionOffsetXImgSpin)-(window.event.clientX);
		dYImgSpin=(centerYImgSpin-expansionOffsetYImgSpin)-(window.event.clientY);
		
		
		//This if statement is to avoid the drawing from flipping when the mouse crosses the halfwaypoint
		if (dXImgSpin>0){
		angleImgSpin=(Math.atan((dYImgSpin/dXImgSpin))-angleStartImgSpin);
		}else{angleImgSpin=(Math.atan((dYImgSpin/dXImgSpin))-angleStartImgSpin+(Math.PI))}
		//alert(angle);
		
}


//Draws the background of the spinner so it gets recognized even when one of the colored pieces isn't being pressed
function draw() {  
	
	
	
	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');  
	
	
	//drawRect using canvas rules
	ctx.fillStyle = 'hsla(150,100%,80%,0.0)';
	ctx.beginPath(); 
	ctx.moveTo(0,0);
	ctx.lineTo (0,widthImgSpin);
	ctx.lineTo (heightImgSpin,widthImgSpin );
	ctx.lineTo (heightImgSpin,0);
	ctx.lineTo (0,0);
	ctx.fill();

	
}



//This is the function that creates the image to be spun,
//in this case, a transparent image that covers the entierty of the canvas
//and the elements that were drawn
function saveInstance() {
	
	  //creates the transparent background 
	 draw();
	 
	 
	 //takes what has allready been drawn and makes it into something that be drawn using canavas rules 
   _savedInstanceImgSpin = document.getElementById('canvas').toDataURL();
   
   
   
	hasBeenCalled=1;
	
	
	clearTimeout(t);;
   
   
   //adding rotate drawing to this one to get the object spinning...
   rotateImgSpin();
  
  }
  
function stopImgSpin(){
	
	clearTimeout(tImgSpin);
	var ImgSpin = new Image();
    ImgSpin.src = _savedInstanceImgSpin;
	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
	ctx.drawImage(ImgSpin,0,0);
}

function rotateImgSpin(){
 
	
	
	var ImgSpin = new Image();
    ImgSpin.src = _savedInstanceImgSpin;
	var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
	
	
	
		clear_canvas_rectangle();
	
	/*if(angle>=Math.PI/2)
	{
		angle-=Math.PI/2
		
	};*/
	
	getHype();
	getSquareAngle();
	getTotalAngle();
	getOffsets();
	getCenter();
	

	
	ctx.translate(centeredXImgSpin,centeredYImgSpin);
	
	ctx.rotate(angleImgSpin);
	ctx.drawImage(ImgSpin,0,0);
		
	
	
	
	angleImgSpin+=dAngleImgSpin;
	
	if (dAngleImgSpin>=0){
	dAngleImgSpin-=angleMomentumImgSpin;
	}else{
		dAngleImgSpin+=angleMomentumImgSpin;
	}
	if(dAngleImgSpin<=angleMomentumImgSpin && dAngleImgSpin>= -angleMomentumImgSpin){
		dAngleImgSpin=0;
	}
	tImgSpin=setTimeout("rotateImgSpin()",1);
	
	
}



//Finds Hypotenus of square
function getHype(){
	hypImgSpin=Math.sqrt((widthImgSpin*widthImgSpin)+(heightImgSpin*heightImgSpin));
	//alert(hypSquare);		
}


//gets the angle  between the width  hypotenus
function getSquareAngle(){
	
	angleWithinImgSpin=Math.atan(heightImgSpin/widthImgSpin);
	var angleWithinImgSpinDegrees=angleWithinImgSpin*(360/(2*Math.PI));
	//alert(angleWithinSquareDegrees);	
}


//gets angle that suqare should be rotated to (slightly more then angle because of horizontal)
function getTotalAngle(){
	angleTotalImgSpin=angleImgSpin+angleWithinImgSpin;
	var angleTotalImgSpinDegrees=angleTotalImgSpin*(360/(2*Math.PI));
		
}


//Gets the offest for center of square. will change the center 
//so that object is rotated around center of square and not corner 
function getOffsets(){
	offxImgSpin=(hypImgSpin* Math.cos(angleTotalImgSpin))/2;
	offyImgSpin=(hypImgSpin* Math.sin(angleTotalImgSpin))/2;
	//alert(offx +'::' + offy);	
}


//puts center of  rotation at centerX, centerY.
function getCenter(){
	centeredXImgSpin=(centerXImgSpin)-offxImgSpin;
	centeredYImgSpin=(centerYImgSpin)-offyImgSpin;
	//alert(centeredX+'::'+centeredY);		
	
}



function clear_canvas_rectangle ()
{
	var thisCanvas = document.getElementById('canvas');
    thisCanvas.width = thisCanvas.width;
	
}
  
  
function resizeImgSpin(){
	var canvas = document.getElementById('canvas');
 	
	canvas.width=window.innerWidth*2;
	canvas.height=window.innerWidth*2;
	
	expansionOffsetYImgSpin=(((canvas.height)-window.innerHeight)/2);
	expansionOffsetXImgSpin=(((canvas.width)-window.innerWidth)/2);
	
	canvas.style.top= -expansionOffsetYImgSpin+'px';
	canvas.style.left= -expansionOffsetXImgSpin+'px';
	
	
	centerXImgSpin=expansionOffsetXImgSpin+(window.innerWidth/2);
	centerYImgSpin=expansionOffsetYImgSpin+(window.innerHeight/2);
	
	widthImgSpin=canvas.width;
	heightImgSpin=canvas.height;
	
	
}


function changeImgSpin(){
	
	var imgDestChangeSpin = document.getElementById('spinButton');
	var imgSrcChangeSpin;
	if (imgIsSpinning==0){
		imgSrcChangeSpin = "images/navBar/unSpin.png";
		imgDestChangeSpin.setAttribute("src", imgSrcChangeSpin);
		saveInstance();
		imgIsSpinning=1;
	}else{
		imgSrcChangeSpin = "images/navBar/spin.png";
		imgDestChangeSpin.setAttribute("src", imgSrcChangeSpin);
		killSpin();
		imgIsSpinning=0;
	}
}

//functions to call when window is loaded
function goImgSpin(){
	
	resizeImgSpin();
	
	//draw();
	
	//rotateImgSpin();
	
	
}
