let secretVideo = document.querySelector('video');
let secretButton = document.querySelector('button');
let banner = document.querySelector("img");
let bannerClicks = 0;

// Once the banner is clicked twice, show the secret button
banner.onclick = function() {
	bannerClicks++;
	if(bannerClicks===2) {
		secretButton.hidden = false;
	}
}

// Play the secret video and hide the button when it is pressed
secretButton.onclick = function() {
	secretButton.hidden = true;
	secretVideo.hidden = false;
	secretVideo.play();
}

// Hide the video once it has finished playing
secretVideo.onended = (event) => {
	secretVideo.hidden = true;
}
