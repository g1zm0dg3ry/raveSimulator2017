	var x = 500000;
	function colorChange(){
		do {
		document.getElementById("raveTable");
		raveTable.style.backgroundColor = x;
		x++;
		setTimeout(colorChange, 1);
		}
		while (x > 999999);
	}
	function appear(){
		document.getElementById("performer");
		performer.style.display = "block";
	}
	function disappear(){
		document.getElementById("activateRave");
		activateRave.style.display = "none";
	}
	function gigSelector(){
	var gig = prompt("Who do ya wanna see live???").toLowerCase();
		if (gig == "fall out boy") {
			document.getElementById("performer");
			performer.src = "http://24.media.tumblr.com/8210fd413c5ce209678ef82d65731443/tumblr_mjphnqLpNy1s5jjtzo1_400.gif";
			var audio = new Audio ('http://a.tumblr.com/tumblr_mwg6fzWvYw1rfudy1o1.mp3');
			audio.play();
			document.getElementById("text1").innerHTML = "Fall Out Boy";
		}
		else if (gig == "passion pit") {
			document.getElementById("performer");
			performer.src = "https://s-media-cache-ak0.pinimg.com/originals/a5/0c/98/a50c988565051c62e9315b8b591f877f.jpg";
			var audio = new Audio ('https://a.tumblr.com/tumblr_njjj1ePjIu1tu0eilo1.mp3');
			audio.play();
			document.getElementById("text1").innerHTML = "Passion Pit";
		}
		else if (gig == "psy") {
			document.getElementById("performer");
			performer.src = "http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/0/09/Giphy_%281%29-1467048090.gif/revision/latest?cb=20160627172130";
			var audio = new Audio ('https://dl.pagal.link/upload_file/5570/6673/7479/Gangnam-Style-PSY-%28Pagalworld.Com%29.mp3');
			audio.play();
			document.getElementById("text1").innerHTML = "PSY";
		}
		else if (gig == "mcr") {
			document.getElementById("performer");
			performer.src = "https://68.media.tumblr.com/9e9c3f70954ac563e568e0f4001e481a/tumblr_nn4rtmvYmW1r9m88fo1_500.gif";
			var audio = new Audio ('http://k003.kiwi6.com/hotlink/93bw2h3n2u/My_Chemical_Romance_-_I_m_Not_Okay_I_Promise_.mp3');
			audio.play();
			document.getElementById("text1").innerHTML = "MCR";
		}
		else {
			document.getElementById("performer");
			performer.src = "http://cdn.osxdaily.com/wp-content/uploads/2013/07/dancing-banana.gif";
			var audio = new Audio ('http://www.lowerfrequencies.com/wp-content/uploads/2012/mp3s/07%20Feels%20Like%20We%20Only%20Go%20Backwards.mp3');
			audio.play();
			document.getElementById("text1").innerHTML = "Tame Impala";
		}
	}