	var x = 500000;
	function colorChange(){
		do {
		document.getElementById("title");
		title.style.color = x;
		x++;
		setTimeout(colorChange, 1);
		}
		while (x > 999999);
	}
	function appear(){
		document.getElementById("performer");
		performer.style.display = "block";
		document.getElementById("nowplaying");
		nowplaying.style.display = "block";
		document.body.style.background = "#000000";
		document.body.style.backgroundImage="url(https://68.media.tumblr.com/4846fd43bd537e81e472a5c42d3c849a/tumblr_oigx91hluw1us554lo1_1280.gif)";
		document.body.style.backgroundSize = "2400px 1300px";
		document.body.style.backgroundRepeat = "no-repeat";
	}
	function disappear(){
		document.getElementById("activateRave");
		activateRave.style.display = "none";
	}
	

	
	function gigSelector(){
	gig = prompt("Who do ya wanna see live???").toLowerCase();
	console.log(gig);
		if (gig == "fall out boy") {
			document.getElementById("performer");
			performer.src = "http://24.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gif";
			document.getElementById("text1").innerHTML = "Fall Out Boy";
		}
		else if (gig == "passion pit") {
			document.getElementById("performer");
			performer.src = "https://s-media-cache-ak0.pinimg.com/originals/a5/0c/98/a50c988565051c62e9315b8b591f877f.jpg";
			document.getElementById("text1").innerHTML = "Passion Pit";
		}
		else if (gig == "psy") {
			document.getElementById("performer");
			performer.src = "http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/0/09/Giphy_%281%29-1467048090.gif/revision/latest?cb=20160627172130";
			document.getElementById("text1").innerHTML = "PSY";
		}
		else if (gig == "mcr") {
			document.getElementById("performer");
			performer.src = "https://68.media.tumblr.com/9e9c3f70954ac563e568e0f4001e481a/tumblr_nn4rtmvYmW1r9m88fo1_500.gif";
			document.getElementById("text1").innerHTML = "MCR";
		}
	}
	
	function playMusic(){
		if (gig == "fall out boy"){
				document.getElementById('musicItem1').play();
			}
			else if (gig == "passion pit"){
				document.getElementById('musicItem2').play();
			}
			else if (gig == "psy"){
				document.getElementById('musicItem3').play();
			}
			else if (gig == "mcr"){
				document.getElementById('musicItem4').play();
			}
	}
		 		
	function pauseMusic(){
		if (gig == "fall out boy" | gig == "passion pit" | gig == "psy" | gig == "mcr"){
				document.getElementById('musicItem1').pause();
				document.getElementById('musicItem2').pause();
				document.getElementById('musicItem3').pause();
				document.getElementById('musicItem4').pause();
		}
	}