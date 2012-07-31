// JavaScript Document


//This part was never implemented, and is just some silly extra code. IF anyone can think of a way to make it so that the image could be downloaded:
//isaaclandoncohen@gmail.com





window.onload = function() {

		var obotcanvas = document.getElementById("botcanvas");

		var botcxt = obotcanvas.getContext("2d");

		botcxt.fillStyle="#FFFFFF";

		botcxt.fillRect(0,0,200,100);

		botcxt.fillStyle="#FF0000";

		botcxt.beginPath();

		botcxt.arc(100,50,30,0,Math.PI*2,true);

		botcxt.closePath();

		botcxt.fill();

 		function showDownloadText() {

			document.getElementById("buttoncontainer").style.display = "none";

			document.getElementById("textdownload").style.display = "block";

		}

	 		function hideDownloadText() {

			document.getElementById("buttoncontainer").style.display = "block";

			document.getElementById("textdownload").style.display = "none";

		}

	 		function converttoCanvas(strType) {

			if (strType == "PNG")

				var oImg = Canvas2Image.saveAsPNG(obotcanvas, true);

			if (strType == "BMP")

				var oImg = Canvas2Image.saveAsBMP(obotcanvas, true);

			if (strType == "JPEG")

				var oImg = Canvas2Image.saveAsJPEG(obotcanvas, true);

	 		if (!oImg) {

				alert("Sorry, this browser is not capable of saving " + strType + " files!");

				return false;

			}
			
			

 			oImg.id = "canvasimage";

	 		oImg.style.border = obotcanvas.style.border;

			obotcanvas.parentNode.replaceChild(oImg, obotcanvas);

	 		showDownloadText();

		}
		
		
		function saveCanvas(pCanvas, strType) {
			
			
			bRes = Canvas2Image.saveAsPNG(botcanvas);
			alert("work");
		}


		document.getElementById("savepngbtn").onclick = function() {
			var bRes = false;
			alert("work");
			saveCanvas(botcanvas, "PNG");
		
		}

		document.getElementById("converttopngbutton").onclick = function() {

			converttoCanvas("PNG");

		}

		
	 		document.getElementById("resetbutton").onclick = function() {

			var oImg = document.getElementById("canvasimage");

			oImg.parentNode.replaceChild(obotcanvas, oImg);

	 

			hideDownloadText();

		}

 }







function saveImage(){
	
	
	function drawBackground(){
	var backgroundImgSpin = new Image();
    backgroundImgSpin.src = "images/backgrounds/airBG.png";
	var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');
	ctx2.drawImage(backgroundImgSpin,0,0);
	alert("it works");
	}
	
	_savedInstanceImgSpin = document.getElementById('canvas').toDataURL();
	
	var savedImgSpin = new Image();
    savedImgSpin.src = _savedInstanceImgSpin;
	
	
	alert("work");
	var canvas2 = document.getElementById('canvas2');
    var ctx2 = canvas2.getContext('2d');
	
	ctx2.drawImage(savedImgSpin,-expansionOffsetXImgSpin,-expansionOffsetYImgSpin);

	var imageToDownload = document.getElementById('canvas2').toDataURL();
	
	document.getElementById('savePicture').style.top=-expansionOffsetYImgSpin+'px';
	document.getElementById('savePicture').style.left=-expansionOffsetXImgSpin+'px';
 	document.getElementById('savePicture').setAttribute("src",imageToDownload);	
	
	document.getElementById('testOpen').setAttribute("href", imageToDownload);
	
}
