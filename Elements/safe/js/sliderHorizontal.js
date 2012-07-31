// JavaScript Document


var left = null; // object
var right = null; //newObject
var expanded=new Boolean(true);
var MT;
var MBT;
var divArray1 = new Array("leftObj","rightObj");
var sliderWidth=200;
var isShowing=0;

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
  if (left_curr_width < sliderWidth ){left.style.width = left_curr_width+5+'px';MT = setTimeout(doMoveSide,20);}
  else{
	   left.style.width = sliderWidth+'px';
  	   replaceImg("images/navBar/slideBack.png");
	   }
  
   // call doMove in 20msec
   right.style.left=left.style.width;
  
}

function doMoveBackSide() {
  //var move = (200-foo_curr_height)/2 +1;
  
  var left_curr_width = parseInt(left.style.width);
  //foo.style.left = parseInt(foo.style.left)+1+'px';
  if (left_curr_width >23){left.style.width = left_curr_width-5+'px';MBT=setTimeout(doMoveBackSide,20);}
  else{left.style.width = 23+'px';
  replaceImg("images/navBar/slide.png")}
 ; // call doMove in 20msec
  right.style.left=left.style.width;
}



function init() {
 
  left = document.getElementById(divArray1[0]); // get the "foo" object
  right = document.getElementById(divArray1[1]); // get the "foo" object

  left.style.width = '25px';
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

 window.onload = init;
