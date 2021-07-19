let myVideo = document.querySelector('video');
let myButton = document.querySelector('button');
let myImage = document.querySelector("img");
let clicks = 0;

myButton.onclick = function() {
	myButton.hidden = true;
	myVideo.hidden = false;
	myVideo.play();
}

myImage.onclick = function() {
	clicks++;
	if(clicks===2) {
		myButton.hidden = false;
	}
}

myVideo.onended = (event) => {
	myVideo.hidden = true;
	myButton.hidden = true;
}
