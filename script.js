const boom = document.getElementById("boom");
const clap = document.getElementById("clap");
const hihat = document.getElementById("hihat");
const kick = document.getElementById("kick");
const openhat = document.getElementById("openhat");
const ride = document.getElementById("ride");
const snare = document.getElementById("snare");
const tink = document.getElementById("tink");
const tom = document.getElementById("tom");
// ----------AUDIO FILES---------------------
const boomAudio = new Audio("boom.wav");
const clapAudio = new Audio("clap.wav");
const hihatAudio = new Audio("hihat.wav");
const kickAudio = new Audio("kick.wav");
const openhatAudio = new Audio("openhat.wav");
const rideAudio = new Audio("ride.wav");
const snareAudio = new Audio("snare.wav");
const tinkAudio = new Audio("tink.wav");
const tomAudio = new Audio("tom.wav");

// ----------on-click sounds ------------

boom.addEventListener("click", () => {
	boomAudio.play();
});

clap.addEventListener("click", () => {
    clapAudio.play();
});

hihat.addEventListener("click", () => {
    hihatAudio.play();
});
kickAudio.addEventListener("click", () => {
    kickAudio.play();
});
openhat.addEventListener("click", () => {
    openhatAudio.play();
});
ride.addEventListener("click", () => {
    rideAudio.play();
});
snare.addEventListener("click", () => {
    snareAudio.play();
});
tink.addEventListener("click", () => {
    tinkAudio.play();
});
tom.addEventListener("click", () => {
    tomAudio.play();
});
// 
// ----------- on-button press-------------------

window.addEventListener("keypress", (e) => {
    if (e.key === "a" || e.key === "A") {
		boomAudio.play();
	};
});


window.addEventListener("keypress", (e) => {
    if (e.key === "s" || e.key === "S") {
		clapAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "d" || e.key === "D") {
		hihatAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "f" || e.key === "F") {
        kickAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "g" || e.key === "G") {
        openhatAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "h" || e.key === "H") {
		rideAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "j" || e.key === "J") {
        snareAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "k" || e.key === "K") {
        tinkAudio.play();
	};
});

window.addEventListener("keypress", (e) => {
    if (e.key === "l" || e.key === "L") {
        tomAudio.play();
	};
});

