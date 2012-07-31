

/*These are the different ways the image can be created, only one is used at a time, 
but I guess they could be combined somehow?
They are called in the elements.js*/



//Using thing this HWChanger will make the page full of color,
//and the motion of the drawing is almost enought to be a visualizer
//not really ornate or even that beautiful, but visually interesting.
function Changer1(){
	width=x;
	height=y;
	
	
	
	//one spin will be placed at the area where teh mouse is, so that you can cover the canvas if your heart so desires,
	//the other will be random.
	radius=getRadius();
	radius1=radius;
	radius2=randHW();
	radius3=randHW();
	radius4=randHW();
	
	h1= ((x/window.innerWidth)*20)+newHue;
	h2= ((y/window.innerHeight)*20)+newHue2;
	h3=((x/window.innerWidth)*20)+newHue3;
	h4=((y/window.innerHeight)*20)+newHue4;
}


//This is the Original HW changer, making the height and width dependent on where you are in relationship to center of the page
function Changer2(){
	width=(x-middleX)/10;
	height=(y-middleY)/10;
	
	
	//one spin will be placed at the area where teh mouse is, so that you can cover the canvas if your heart so desires,
	//the other will be random.
	radius=getRadius();
	radius1=radius;
	radius2=randHW();
	radius3=randHW();
	radius4=randHW();
	
	h1= ((x/window.innerWidth)*20)+newHue;
	h2= ((y/window.innerHeight)*20)+newHue2;
	h3=((x/window.innerWidth)*20)+newHue3;
	h4=((y/window.innerHeight)*20)+newHue4;
}


//this one makes tons of tiny squares, really cool effect when rotated, not that tight on tis own.
function Changer3(){
	width=x/100;
	height=y/100;
	
	
	//one spin will be placed at the area where teh mouse is, so that you can cover the canvas if your heart so desires,
	//the other will be random.
	radius=getRadius();
	radius1=radius;
	radius2=randHW();
	radius3=randHW();
	radius4=randHW();
	
	h1= ((x/window.innerWidth)*40)+newHue;
	h2= ((y/window.innerHeight)*40)+newHue2;
	h3=((x/window.innerWidth)*40)+newHue3;
	h4=((y/window.innerHeight)*40)+newHue4;
}