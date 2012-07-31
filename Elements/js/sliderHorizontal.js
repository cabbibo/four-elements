// JavaScript Document


var left = null; // object
var right = null; //newObject
var expanded=new Boolean(true);
var MT;
var MBT;
var divArray1 = new Array("leftObj","rightObj");
var sliderWidth=230;
var isShowing=0;
var speed=3;

function moveHor(i){
	
	left = document.getElementById(divArray1[i]);
	//foo2 = document.getElementById(divArray1[i+1]);
	
	if (expanded == true){
		clearTimeout(MT);
		clearTimeout(MBT);
		expanded=false;
		doMoveSide();
	}
	else{
		expanded=true;
		clearTimeout(MT);
		clearTimeout(MBT);
		doMoveBackSide();
	}
}


function doMoveSide() {

  //var move = (200-foo_curr_height)/2 +1;
  var left_curr_width = parseInt(left.style.width);
  //foo.style.left = parseInt(foo.style.left)+1+'px';
  if (left_curr_width < sliderWidth ){left.style.width = left_curr_width+speed+'px';MT = setTimeout(doMoveSide,10);}
  else{
	   left.style.width = sliderWidth+'px';
  	   replaceImg("Elements/images/navBar/icons/slideBack.png");
	   }
  
   // call doMove in 20msec
   right.style.left=left.style.width;
  
}

function doMoveBackSide() {
  //var move = (200-foo_curr_height)/2 +1;
  
  var left_curr_width = parseInt(left.style.width);
  //foo.style.left = parseInt(foo.style.left)+1+'px';
  if (left_curr_width >27){left.style.width = left_curr_width-speed+'px';MBT=setTimeout(doMoveBackSide,10);}
  else{left.style.width = 27+'px';
  replaceImg("Elements/images/navBar/icons/slide.png")}
 ; // call doMove in 20msec
  right.style.left=left.style.width;
}



function init() {
 
  left = document.getElementById(divArray1[0]); // get the "foo" object
  right = document.getElementById(divArray1[1]); // get the "foo" object

  left.style.width = '27px';
  right.style.left = '40px';
  right.style.left=left.style.width;
  
 
}

function replaceImg(path) {
 	var imgDest = document.getElementById('slider');
	var imgSrc = path;
	imgDest.setAttribute("src", imgSrc);
	}
	
	
function showInfo(){
if (isShowing==0){
	document.getElementById("pageInfo").style.visibility="visible";
	isShowing=1;	
}else{
	document.getElementById("pageInfo").style.visibility="hidden";
	isShowing=0;	
}
}


function showElementInfo(){
document.getElementById("elementButton").style.backgroundImage = "url(Elements/images/navBar/text/changeElement.png)";
}

function hideElementInfo(){
var imgDestElement = document.getElementById('elementButton');
var imgSrcElement;

switch(element){
		case 1:
		imgSrcElement = "Elements/images/navBar/icons/fire.png";
		imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
		break;
			case 2:
		imgSrcElement = "Elements/images/navBar/icons/water.png";
		imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
		break;
			case 3:
		imgSrcElement = "Elements/images/navBar/icons/earth.png";
		imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
		break;
		case 0:
		imgSrcElement = "Elements/images/navBar/icons/air.png";
		imgDestElement.style.backgroundImage = "url(" +imgSrcElement+")";
		break;
	}
}

 window.onload = init;
